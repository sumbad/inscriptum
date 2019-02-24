import cloudinary from 'cloudinary-core';




const cloudName = 'inscriptum';
const unsignedUploadPreset = 'cz5pibn5';


// *********** Upload file to Cloudinary ******************** //
export function uploadFile(file): Promise<any> {
  return new Promise(
    (resolve, reject) => {
      var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
      var xhr = new XMLHttpRequest();
      var fd = new FormData();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

      // Reset the upload progress bar
      //  document.getElementById('progress').style.width = 0;

      // Update progress (can be used to show progress indicator)
      xhr.upload.addEventListener('progress', function (e) {
        var progress = Math.round((e.loaded * 100.0) / e.total);
        // document.getElementById('progress').style.width = progress + "%";

        console.log(`fileuploadprogress data.loaded: ${e.loaded},
      data.total: ${e.total}`);
      });

      fd.append('upload_preset', unsignedUploadPreset);
      fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
      fd.append('file', file);
      xhr.send(fd);

      xhr.onreadystatechange = (e) => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          // File uploaded successfully
          var response = JSON.parse(xhr.responseText);
          // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
          // var url = response.secure_url;
          // Create a thumbnail of the uploaded image, with 150px width
          // var tokens = url.split('/');
          // tokens.splice(-2, 0, 'w_150,c_scale');
          // var img = new Image(); // HTML5 Constructor
          // img.src = url;//tokens.join('/');
          // img.alt = response.public_id;


          console.log(1111, response);

          resolve(response);

          // document.getElementById('gallery').appendChild(img);
        }
      };

      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
      
    });
}




// var cl = cloudinary.Cloudinary.new( { cloud_name: 'inscriptum'});






// export class EditorImage extends Image {
//   static create(value) {
//     // let node = super.create(value);
//     // if (typeof value === 'string') {
//     //   node.setAttribute('src', this.sanitize(value));
//     // }

//     // console.log(value);

//     // const reader = new FileReader();
//     // reader.readAsDataURL(value);
//     // const img = new Image();
//     // img.src = value; //event.target.result;


//     return Image.create(value);
//   }


//   format(name, value) {
//     console.log(name, value);



//   }
// }