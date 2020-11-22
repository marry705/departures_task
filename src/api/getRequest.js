import {CONST} from '../constants/constants';

export async function getRequest(request) {
    const response = await fetch(`${CONST.SERVER_HOST}/${request.originPlace}-sky/${request.destinationPlace}-sky/${request.outboundpartialDate}`, 
    {
        method: 'GET',
        headers: {
            'x-rapidapi-key': CONST.API_KEY,
            'x-rapidapi-host': CONST.API_HOST
        }
    })
    return await response.json();
}

export function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}