'use strict';
const a6_0x5c6691 = a6_0x5eb7;
(function (_0x48eb0e, _0x59edff) {
    const _0x2a1378 = a6_0x5eb7, _0x55f121 = _0x48eb0e();
    while (!![]) {
        try {
            const _0x1e9a8a = parseInt(_0x2a1378(0xd6)) / 0x1 * (parseInt(_0x2a1378(0xcb)) / 0x2) + -parseInt(_0x2a1378(0xd1)) / 0x3 + -parseInt(_0x2a1378(0xd3)) / 0x4 * (parseInt(_0x2a1378(0xcc)) / 0x5) + -parseInt(_0x2a1378(0xd7)) / 0x6 * (parseInt(_0x2a1378(0xcd)) / 0x7) + parseInt(_0x2a1378(0xd5)) / 0x8 + -parseInt(_0x2a1378(0xce)) / 0x9 + parseInt(_0x2a1378(0xd2)) / 0xa;
            if (_0x1e9a8a === _0x59edff)
                break;
            else
                _0x55f121['push'](_0x55f121['shift']());
        } catch (_0x535b3c) {
            _0x55f121['push'](_0x55f121['shift']());
        }
    }
}(a6_0x4195, 0x7f173));
function a6_0x4195() {
    const _0x7eb62a = [
        '8083035mEyRXl',
        'Schema',
        'mongoose',
        '2928780JGGaSd',
        '17534190JFHYhc',
        '143656VBhnWV',
        '__esModule',
        '6528608ljWwxQ',
        '488239NKtWSE',
        '6LvMLMn',
        'Surat',
        '2IwCban',
        '15kmNtgR',
        '3885378eiLvIJ'
    ];
    a6_0x4195 = function () {
        return _0x7eb62a;
    };
    return a6_0x4195();
}
Object['defineProperty'](exports, a6_0x5c6691(0xd4), { 'value': !![] }), exports[a6_0x5c6691(0xca)] = void 0x0;
const mongoose_1 = require(a6_0x5c6691(0xd0)), SuratSchema = new mongoose_1[(a6_0x5c6691(0xcf))]({
        'no': {
            'type': String,
            'required': !![]
        },
        'date': {
            'type': String,
            'required': !![]
        },
        'about': {
            'type': String,
            'required': !![]
        },
        'category': {
            'type': String,
            'required': !![]
        },
        'uri': {
            'type': String,
            'required': !![]
        },
        'tujuan': {
            'type': String,
            'required': !![],
            'default': '-'
        },
        'asal': {
            'type': String,
            'required': !![],
            'default': '-'
        }
    }, { 'timestamps': !![] });
function a6_0x5eb7(_0x19cea6, _0x32e8ad) {
    const _0x419518 = a6_0x4195();
    return a6_0x5eb7 = function (_0x5eb72d, _0x58aa01) {
        _0x5eb72d = _0x5eb72d - 0xca;
        let _0x23f16f = _0x419518[_0x5eb72d];
        return _0x23f16f;
    }, a6_0x5eb7(_0x19cea6, _0x32e8ad);
}
exports[a6_0x5c6691(0xca)] = (0x0, mongoose_1['model'])(a6_0x5c6691(0xca), SuratSchema);