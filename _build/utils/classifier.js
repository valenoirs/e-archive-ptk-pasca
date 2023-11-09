"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classify = void 0;
var Whichx = require("whichx");
var classifier = new Whichx();
var labels = ['masuk', 'keluar'];
classifier.addLabels(labels);
classifier.addData('masuk', 'permohonan pemberitahuan monitoring undangan edaran');
classifier.addData('keluar', 'permohonan ujian aktif kuliah usulan persetujuan penerbitan pengantar');
var classify = function (text) {
    var output = classifier.classify(text);
    if (output === 'masuk')
        return 'Surat Masuk';
    if (output === 'keluar')
        return 'Surat Keluar';
    return 'Error';
};
exports.classify = classify;
