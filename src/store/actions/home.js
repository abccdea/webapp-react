import * as Types from '../action-types';

let action = {
    setCurrentLesson(type) {
        return {type: Types.SET_CURRENT_LESSON, lesson: type}
    }
}

export default action;