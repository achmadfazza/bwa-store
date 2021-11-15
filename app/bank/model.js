const mongoose = require("mongoose");

let bankSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama Harus Diisi"],
  },
  bankName: {
    type: String,
    require: [true, "Nama Bank Harus Diisi"],
  },
  noRekening: {
    type: String,
    require: [true, "Nomor Rekening Bank Harus Diisi"],
  },
});

module.exports = mongoose.model("Bank", bankSchema);
