export class CommonHelper {

    constructor() { }

    // static MOBILE_REGEX = /^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|51|52|55|56)[0-9]{7}$/;
    static MOBILE_REGEX = /^(?:\+92|0)(3)[0-9]{9}$/;
    // static MOBILE_REGEX = /^(+92|0)(3)[0-9]{9}$/;
    // static MOBILE_REGEX = /^(03)?[0-9]{9}$/;

    /* 
        Convert file to byte[]
        @param: file: File
        @param: callback: Function | its a callback function
        @return: Uint8Array
    */
    static fileToBytes = (file: File, callback: Function) => {
        let reader = new FileReader();
        reader.readAsArrayBuffer(file[0]);
        reader.onloadend = () => {
            let unitArray = new Uint8Array((reader as any).result)
            let bytes = Array.prototype.slice.call(unitArray);
            callback(bytes, file[0].type);
        };
    };

    /* 
        Convert file to byte[]
        @param: file: FileList
        @param: callback: Function | its a callback function
        @return: Uint8Array
    */
    static filesToBytes = (files: FileList, bytesCallback: Function, callback: Function) => {

        let processed = 0;
        [].forEach.call(files, (file: File, index) => {
            let reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => {

                processed++;
                let unitArray = new Uint8Array((reader as any).result)
                let bytes = Array.prototype.slice.call(unitArray);
                bytesCallback(bytes, index);

                // When all async operation completed then call final callback function
                if (processed === files.length) {
                    callback();
                }

            }
        });
    };

    /* 
        Calculate rating star width in %
        @param: rating: number
        @return: number
    */
    static calcRatingWidth = (rating: number) => {
        return (rating * 100 / 5);
    }

    /* 
        Mark from controls state is touched
        @param: formGroup: FormGroup | NgForm
    */
    static markFormGroupTouched = (formGroup) => {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();

            if (control.controls) {
                CommonHelper.markFormGroupTouched(control);
            }
        });
    };

    /* 
        Mark from controls state is untouched
        @param: formGroup: FormGroup | NgForm
    */
    static markFormGroupUnTouched = (formGroup) => {
        (<any>Object).values(formGroup.controls).forEach((control) => {
            control.markAsUntouched();
            if (control.controls) {
                CommonHelper.markFormGroupUnTouched(control);
            }
        });
    };

    /* 
        Remove empty property in object
        @param: obj: Object | Any
    */
    static removeEmptyPropFromObject(obj) {
        for (var prop in obj) {
            if (obj[prop] === null || obj[prop] === undefined || obj[prop] === '') {
                delete obj[prop];
            }
        }
    }

    /* 
        Remove list of properties in object
        @param: properties: [] | Any, obj: Object | any
    */
    static removePropArrFromObject(propArr, obj) {
        propArr.forEach(property => {
            delete obj[property]
        });
    }

    /* 
        Get user current position
        @return: Position
    */
    static getUserCurrentPosition() {
        if (navigator.geolocation) {
            return new Promise((resolve) =>
                navigator.geolocation.getCurrentPosition(resolve, function error(error_message) {
                    console.error('An error has occured while retrieving location', error_message);
                    return new Promise((resolve) => {
                        let pos: { coords: Coordinates };
                        let coords: { latitude, longitude };
                        coords.latitude = 25.276987;
                        coords.longitude = 55.296249;
                        pos.coords = coords as Coordinates
                        resolve(coords);
                    });
                }))
        } else {
            console.error("Geolocation is not supported by this browser.");
            return new Promise((resolve) => {
                let pos: { coords: Coordinates };
                let coords: { latitude, longitude };
                coords.latitude = 25.276987;
                coords.longitude = 55.296249;
                pos.coords = coords as Coordinates
                resolve(coords);
            });
        }
    }


    /* 
        Convert MimeType
        @param: mimeType: String
    */
    static trimMimeType(mimeType: string): string {
        if (mimeType.indexOf("/"))
            return (mimeType.substring(mimeType.indexOf("/") + 1, mimeType.length));
        else
            return mimeType;

    }

    static convertFileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let base64Str = reader.result.toString();
                let base64 = base64Str.substring(base64Str.indexOf(",") + 1, base64Str.length - 1)
                resolve(base64);
            };
            reader.onerror = error => reject(error);
        });
    }

}