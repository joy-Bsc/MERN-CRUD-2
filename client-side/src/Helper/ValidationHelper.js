import cogoToast from 'cogo-toast';
class ValidationHelper {
    isEmpty(value) {
       if(value.length===0){
        return true;
       }
       else {
        return false;
       }
    }

    successToast(msg) {
        cogoToast.success(msg);
    }

    errorToast(msg) {
        cogoToast.error(msg);
    }
}

export const { isEmpty, successToast, errorToast } = new ValidationHelper();
