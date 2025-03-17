import axios from 'axios';

async function fetchData<T>(url:string): Promise<T> {
 try {
    const response = await axios.get<T>(url);
    return response.data;
} catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
}
}

interface Data {
    result: string
}

interface Data2 {
    result: number
}

const data = await fetchData<Data>('fkaskflds')
const data2 = await fetchData<Data2>('fkaskflds')

data2.result.