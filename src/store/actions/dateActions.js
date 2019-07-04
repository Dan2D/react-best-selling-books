import {CHANGE_WEEK} from "./types";

export const changeWeek = (date) => {
    return {type: CHANGE_WEEK,
    payload: date
    }
};


