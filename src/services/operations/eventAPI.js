import { apiConnector } from '../apiConnector';
import { eventsEndpoints } from '../apis';

const { GET_ALL_EVENTS_API } = eventsEndpoints;
export const getAllEvents = async () => {
    let result = [];
    try {
        const response = await apiConnector('GET', GET_ALL_EVENTS_API);
        if (!response?.data?.success) {
            throw new Error('Could Not Fetch Events');
        }
        result = response?.data?.data;
    } catch (error) {
        console.log('GET_ALL_EVENTS_API API ERROR............', error);
        // toast.error(error.message)
    }
    //   toast.dismiss(toastId)
    return result;
};
