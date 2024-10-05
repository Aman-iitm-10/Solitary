const BASE_URL = import.meta.env.VITE_BASE_URL;

export const eventsEndpoints = {
    GET_ALL_EVENTS_API: BASE_URL + '/event/events',
};

export const societiesAndClubsEndpoints = {
    GET_ALL_CLUBS_API: BASE_URL + '/club/clubs',
};

export const teamMembersEndpoints = {
    GET_ALL_TEAM_MEMBERS_API: BASE_URL + '/teamMembers/members/',
};

export const housesEndpoints = {
    GET_ALL_HOUSES_API: BASE_URL + '/house/houses',
};
