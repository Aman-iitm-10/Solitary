import { apiConnector } from '../apiConnector';
import { societiesAndClubsEndpoints } from '../apis';

const { GET_ALL_CLUBS_API } = societiesAndClubsEndpoints;
export const getAllClubs = async () => {
    let result = [];
    try {
        const response = await apiConnector('GET', GET_ALL_CLUBS_API);
        if (!response?.data?.success) {
            throw new Error('Could Not Fetch Clubs');
        }
        result = response?.data?.data;
    } catch (error) {
        console.log('GET_ALL_CLUBS_API API ERROR............', error);
        // toast.error(error.message)
    }
    //   toast.dismiss(toastId)
    return result;
};
