import merge from 'lodash.merge';

import { StateKey } from './models';
import { overwritesWebsiteState } from './website';

export const getOverwritesForState = (key: StateKey) => {
    switch (key) {
        case StateKey.Website:
            return overwritesWebsiteState;
        default:
            throw new Error(`Key "${key}" out of bounds`);
    }
};

export const loadStateFromLocalStorage = <StateType>(key: StateKey, defaultState: StateType): StateType => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return defaultState;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return defaultState;
    }
};

export const saveStateToLocalStorage = <StateType>(key: StateKey, state: StateType, stateOverwrites?: any) => {
    try {
        const mergedState = stateOverwrites ? merge({}, state, stateOverwrites) : state;
        localStorage.setItem(key, JSON.stringify(mergedState));
    } catch (error) {
        console.log(`⚠ Unable to save state to localStorage (${(error as any)?.message})`);
    }
};

/**
 * @deprecated
 * @template ReducerFunction
 * @param {StateKey} key
 * @param {ReducerFunction} originalFunction
 * @return {*}
 */
export const presistStateWrapper = <ReducerFunction>(key: StateKey, originalFunction: ReducerFunction) => {
    const wrappedFunction: ReducerFunction = function emitterFuction(this: any) {
        /* work before the function is called */
        try {
            // @ts-ignore
            const returnValue = originalFunction.apply(this, arguments);
            /* work after the function is called */
            saveStateToLocalStorage(key, returnValue, getOverwritesForState(key));
            return returnValue;
        } catch (e) {
            throw e;
        }
    } as any;

    for (const prop in originalFunction) {
        // @ts-ignore
        if (originalFunction.hasOwnProperty(prop)) {
            // @ts-ignore
            wrappedFunction[prop] = originalFunction[prop];
        }
    }

    return wrappedFunction;
};

export const persistState = <ReducerFunction extends (...args: any[]) => any>(
    key: StateKey,
    reducerFunction: ReducerFunction
): ReducerFunction => {
    const wrappedFunction: ReducerFunction = function emitterFuction(this: any) {
        /* work before the function is called */
        try {
            // @ts-ignore
            const returnValue = reducerFunction.apply(this, arguments);
            /* work after the function is called */
            saveStateToLocalStorage(key, returnValue, getOverwritesForState(key));
            return returnValue;
        } catch (e) {
            throw e;
        }
    } as any;

    for (const prop in reducerFunction) {
        if (reducerFunction.hasOwnProperty(prop)) {
            wrappedFunction[prop] = reducerFunction[prop];
        }
    }

    return wrappedFunction;
};
