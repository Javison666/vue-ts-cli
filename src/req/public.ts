import $fn from '@/utils/fn'
import httpApi from '@/apis/httpApi'

interface GetNpmstatData {
    package: string,
    from: string,
    until: string
}
export const getNpmStat = (json: GetNpmstatData): any => $fn.httpPost({
    url: httpApi.public.getNpmStat,
    json
})
