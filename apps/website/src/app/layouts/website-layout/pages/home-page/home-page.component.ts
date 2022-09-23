import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISmartPictureSettings } from '@components/smart-picture';
import { Store } from '@ngrx/store';
import { IAppState } from '@store/models';
import { SetGlobalSocialIconsStateAction } from '@store/website';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
    public demoImage: ISmartPictureSettings = {
        definition: [{ resourcePath: '/assets/svg/developer.svg', imageType: 'svg+xml' }],
        size: { widthRatio: 16, heightRatio: 9 },
    };

    public totalItems = this.items(4);
    public totalChunks = 4;

    public toolsInChunks = this.chunkArray(
        this.randomizeArray([
            { name: 'Angular', icon: '/assets/svg/icon-angular.svg', homepage: 'https://angular.io/' },
            { name: 'React', icon: '/assets/svg/icon-react.svg', homepage: 'https://reactjs.org/' },
            { name: 'C#', icon: '/assets/svg/icon-csharp.svg', homepage: 'https://dotnet.microsoft.com/en-us/languages/csharp' },
            { name: 'PHP', icon: '/assets/svg/icon-php.svg', homepage: 'https://www.php.net/' },
            { name: 'Python', icon: '/assets/svg/icon-python.svg', homepage: 'https://www.python.org/' },
            { name: 'JavaScript', icon: '/assets/svg/icon-javascript.svg', homepage: 'https://developer.mozilla.org/docs/Web/JavaScript' },
            { name: 'TypeScript', icon: '/assets/svg/icon-typescript.svg', homepage: 'https://www.typescriptlang.org/' },
            { name: 'SQL', icon: '/assets/svg/icon-sql.svg', homepage: 'https://developer.mozilla.org/docs/Glossary/SQL' },
            { name: 'VSCode', icon: '/assets/svg/icon-vscode.svg', homepage: 'https://code.visualstudio.com/' },
            { name: 'Rider', icon: '/assets/svg/icon-rider.svg', homepage: 'https://www.jetbrains.com/rider/' },
            { name: 'SCSS', icon: '/assets/svg/icon-sass.svg', homepage: 'https://sass-lang.com/' },
            { name: 'HTML', icon: '/assets/svg/icon-html.svg', homepage: 'https://developer.mozilla.org/docs/Web/HTML' },
            { name: 'PowerShell', icon: '/assets/svg/icon-powershell.svg', homepage: 'https://github.com/PowerShell/PowerShell' },
            { name: 'Bash', icon: '/assets/svg/icon-bash.svg', homepage: 'https://www.gnu.org/software/bash/' },
            { name: 'Figma', icon: '/assets/svg/icon-figma.svg', homepage: 'https://www.figma.com/' },
            { name: 'Notion', icon: '/assets/svg/icon-notion.svg', homepage: 'https://www.notion.so/' },
            { name: 'Node.js', icon: '/assets/svg/icon-nodejs.svg', homepage: 'https://nodejs.org/' },
            { name: 'Express.js', icon: '/assets/svg/icon-expressjs.svg', homepage: 'https://expressjs.com/' },
            { name: '.NET', icon: '/assets/svg/icon-dotnet.svg', homepage: 'https://dotnet.microsoft.com/' },
            { name: 'GraphQL', icon: '/assets/svg/icon-graphql.svg', homepage: 'https://graphql.org/' },
            { name: 'Docker', icon: '/assets/svg/icon-docker.svg', homepage: 'https://www.docker.com/' },
            { name: 'MongoDB', icon: '/assets/svg/icon-mongodb.svg', homepage: 'https://www.mongodb.com/' },
            { name: 'PostgreSQL', icon: '/assets/svg/icon-postgresql.svg', homepage: 'https://www.postgresql.org/' },
            { name: 'SQL Server', icon: '/assets/svg/icon-sql-server.svg', homepage: 'https://www.microsoft.com/en-us/sql-server' },
            { name: 'Vercel', icon: '/assets/svg/icon-vercel.svg', homepage: 'https://vercel.com/' },
            { name: 'Azure', icon: '/assets/svg/icon-azure.svg', homepage: 'https://azure.microsoft.com/' },
            { name: 'AWS', icon: '/assets/svg/icon-aws.svg', homepage: 'https://aws.amazon.com/' },
            { name: 'GitHub', icon: '/assets/svg/icon-github.svg', homepage: 'https://github.com/' },
            { name: 'GitLab', icon: '/assets/svg/icon-gitlab.svg', homepage: 'https://about.gitlab.com/' },
            { name: 'TeamCity', icon: '/assets/svg/icon-teamcity.svg', homepage: 'https://www.jetbrains.com/teamcity/' },
            { name: 'Travis CI', icon: '/assets/svg/icon-travisci.svg', homepage: 'https://www.travis-ci.com/' },
            { name: 'Electron', icon: '/assets/svg/icon-electron.svg', homepage: 'https://www.electronjs.org/' },
            { name: 'PWA', icon: '/assets/svg/icon-pwa.svg', homepage: 'https://web.dev/progressive-web-apps/' },
            { name: 'Jira', icon: '/assets/svg/icon-jira.svg', homepage: 'https://www.atlassian.com/software/jira' },
        ]),
        this.totalChunks
    );

    constructor(private readonly _store: Store<IAppState>) {}

    public ngOnInit(): void {
        setTimeout(() => this._store.dispatch(SetGlobalSocialIconsStateAction({ isInHomePage: true })), 0);
    }

    public ngOnDestroy(): void {
        setTimeout(() => this._store.dispatch(SetGlobalSocialIconsStateAction({ isInHomePage: false })), 0);
    }

    public items(numberOfItems: number): number[] {
        return Array.from(Array(numberOfItems).keys());
    }

    public randomizeArray<Item>(array: Item[]): Item[] {
        let currentIndex = array.length;
        let randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    public chunkArray<Item>(array: Item[], totalChunks: number = 2): Item[][] {
        let chunkLength = Math.max(array.length / totalChunks, 1);
        let chunks = [];

        for (let i = 0; i < totalChunks; i++) {
            if (chunkLength * (i + 1) <= array.length) chunks.push(array.slice(chunkLength * i, chunkLength * (i + 1)));
        }

        return chunks;
    }
}
