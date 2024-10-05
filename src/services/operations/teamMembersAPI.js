import { apiConnector } from '../apiConnector';
import { teamMembersEndpoints } from '../apis';

const { GET_ALL_TEAM_MEMBERS_API } = teamMembersEndpoints;
export const getAllTeamMembers = async () => {
    let result = [];
    try {
        const response = await apiConnector('GET', GET_ALL_TEAM_MEMBERS_API);
        if (!response?.data?.success) {
            throw new Error('Could Not Fetch Members');
        }
        result = response?.data?.data;
    } catch (error) {
        console.log('GET_ALL_TEAM_MEMBERS_API API ERROR............', error);
        // toast.error(error.message)
    }
    //   toast.dismiss(toastId)
    return result;
};
