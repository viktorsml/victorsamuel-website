import { convertToJson } from '@helpers/data-manipulation';

const headers = new Headers({
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
})

export const normalResponse = <DataPayloadType>(dataPayload: DataPayloadType, status = 200): Response => {
  return new Response(convertToJson(dataPayload), { headers, status })
}
export const notFoundResponse = <DataPayloadType>(dataPayload: DataPayloadType): Response => {
  return normalResponse(dataPayload, 404)
}
