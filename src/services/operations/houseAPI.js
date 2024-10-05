import { apiConnector } from '../apiConnector';
import { housesEndpoints } from '../apis';

const { GET_ALL_HOUSES_API } = housesEndpoints;
export const getAllHouse = async () => {
    let result = [];
    try {
        const response = await apiConnector('GET', GET_ALL_HOUSES_API);
        if (!response?.data?.success) {
            throw new Error('Could Not Fetch Houses');
        }
        result = response?.data?.data;
    } catch (error) {
        console.log('GET_ALL_HOUSES_API API ERROR............', error);
        // toast.error(error.message)
    }
    //   toast.dismiss(toastId)
    return result;
};
