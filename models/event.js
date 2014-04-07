var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;

var eventSchema = new Schema({

    // Defined in Apps4Europe vocavulary
    title: String,
    text: String,
    firstPrize: String,
    firstPrizeWinners: [Schema.Types.ObjectId],
    secondPrize: String,
    secondPrizeWinners: [Schema.Types.ObjectId],
    thirdPrize: String,
    thirdPrizeWinners: [Schema.Types.ObjectId],
    edition: Number,
    juryMembers: [{
      name: String,
      email: String
    }],
    registrationLink: String,
    theme: String,
    startDate: Date,
    endDate: Date,
    location: String,

});

module.exports = restful.model('Event', eventSchema);
