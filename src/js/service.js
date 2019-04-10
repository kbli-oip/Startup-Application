import Framework7 from 'framework7';
const endpoint = 'http://localhost:4000';
export default {
  getBandData(cb) {
    Framework7.request.get(`${endpoint}/api/v1/band`, data => {
      console.log(data);
      cb(data);
    });
  },
  getPhotoClassify(form, cb) {
    const params = {
      url: `${endpoint}/api/v1/visual/classify`,
      method: 'POST',
      contentType: 'multipart/form-data',
      data: form,
      success: function(data) {
        console.log(data);
        cb(data);
      },
    };

    Framework7.request(params);
  },
};
