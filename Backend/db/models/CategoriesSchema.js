/*** 
 * 
 */

 const mongoose = require ('mongoose'); 
 const CategoriesSchema = mongoose.Schema({
            name: {
                type: String, 
                required: true
            }
  }); 

 CategoriesSchema.virtual('id').get(function() {
    return this._id.toHexString(); 
})
CategoriesSchema.set('toJSON', {
    virtuals: true,
}); 
 const Category =  mongoose.model('Category', CategoriesSchema); 
 module.exports= {Category}; 