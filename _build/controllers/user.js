'use strict';
const a2_0x590d46 = a2_0x3868;
function a2_0x1851() {
    const _0x43dd27 = [
        'User\x20tidak\x20ditemukan.',
        'Terjadi\x20kesalahan\x20saat\x20mencoba\x20masuk,\x20coba\x20lagi.',
        '[SERVER]:\x20Update\x20password\x20success.',
        'back',
        '8yaBvbJ',
        '__esModule',
        'redirect',
        '6DlFCpc',
        'findOne',
        'clearCookie',
        '[SERVER]:\x20User\x20not\x20found,\x20update\x20password\x20error.',
        '[SERVER]:\x20Akun\x20not\x20found',
        'notification',
        '[SERVER]:\x20Update\x20password\x20failed,\x20old\x20password\x20incorrect.',
        'rHTxX',
        '[SERVER]:\x20Sign\x20out\x20error.',
        'CoLmK',
        'jxnHK',
        '1850643lxpCZA',
        'cuzBq',
        'UCxEM',
        'Gagal\x20melakukan\x20autentikasi,\x20password\x20salah.',
        'User',
        '[SERVER]:\x20Sign\x20in\x20error.',
        'password',
        '[SERVER]:\x20',
        'Akun\x20tidak\x20ditemukan.',
        'SESSION_COLLECTION_NAME',
        '2890220JNuPdx',
        'ZuHnY',
        'session',
        'Konfirmasi\x20password\x20baru\x20gagal.',
        'signIn',
        '[SERVER]:\x20No\x20session\x20id\x20provided.',
        'flash',
        '[SERVER]:\x20Incorrect\x20password',
        'wxyPS',
        'findById',
        'pUZhh',
        '6558LyDniC',
        'TKZup',
        '1619553OuaGOy',
        'signOut',
        'Selamat\x20Datang\x20',
        'user',
        '../config/config',
        'destroy',
        '\x20signed\x20out.',
        'YhLAm',
        'Lqwas',
        'body',
        '19123590uaOvTh',
        'NUiDX',
        'wTrQr',
        'Password\x20salah.',
        '3325DiMBBf',
        'CwzSH',
        '/password',
        'dAPAR',
        'split',
        'log',
        '3956025DCXeaH',
        'CyCPt',
        'AHrli',
        '[SERVER]:\x20New\x20Password\x20confirmation\x20failed.',
        'defineProperty',
        '[SERVER]:\x20Update\x20password\x20error.',
        'XjuyP',
        'Terjadi\x20kesalahan\x20saat\x20mencoba\x20keluar,\x20coba\x20lagi.',
        '946744WJDuLP',
        '__importDefault',
        'updatePassword',
        'findByIdAndUpdate',
        'Terjadi\x20kesalahan\x20saat\x20mencoba\x20memperbarui\x20password,\x20coba\x20lagi.',
        'default',
        'Zxise',
        'error',
        'Password\x20berhasil\x20diperbarui.'
    ];
    a2_0x1851 = function () {
        return _0x43dd27;
    };
    return a2_0x1851();
}
(function (_0xfcaa27, _0xeff32d) {
    const _0x54927e = a2_0x3868, _0x2b9df8 = _0xfcaa27();
    while (!![]) {
        try {
            const _0x4411e2 = -parseInt(_0x54927e(0x156)) / 0x1 + parseInt(_0x54927e(0x172)) / 0x2 + -parseInt(_0x54927e(0x182)) / 0x3 * (parseInt(_0x54927e(0x149)) / 0x4) + parseInt(_0x54927e(0x16a)) / 0x5 + -parseInt(_0x54927e(0x154)) / 0x6 * (-parseInt(_0x54927e(0x164)) / 0x7) + -parseInt(_0x54927e(0x17f)) / 0x8 * (-parseInt(_0x54927e(0x13f)) / 0x9) + parseInt(_0x54927e(0x160)) / 0xa;
            if (_0x4411e2 === _0xeff32d)
                break;
            else
                _0x2b9df8['push'](_0x2b9df8['shift']());
        } catch (_0x345a76) {
            _0x2b9df8['push'](_0x2b9df8['shift']());
        }
    }
}(a2_0x1851, 0xcc5d3));
var __importDefault = this && this[a2_0x590d46(0x173)] || function (_0x92ea91) {
    return _0x92ea91 && _0x92ea91['__esModule'] ? _0x92ea91 : { 'default': _0x92ea91 };
};
Object[a2_0x590d46(0x16e)](exports, a2_0x590d46(0x180), { 'value': !![] }), exports[a2_0x590d46(0x174)] = exports[a2_0x590d46(0x157)] = exports[a2_0x590d46(0x14d)] = void 0x0;
const user_1 = require('../models/user'), config_1 = __importDefault(require(a2_0x590d46(0x15a))), signIn = async (_0x35bb09, _0x4d132a) => {
        const _0x1dbccb = a2_0x590d46;
        try {
            if (_0x1dbccb(0x161) === 'BGotz')
                return _0x102e2d[_0x1dbccb(0x14f)]('notification', _0x1dbccb(0x176)), _0x13e7e7[_0x1dbccb(0x169)]('[SERVER]:\x20Update\x20password\x20error.'), _0x23942b['redirect']('/password');
            else {
                const {
                        email: _0x10573d,
                        password: _0x2ba74a
                    } = _0x35bb09[_0x1dbccb(0x15f)], _0x19840f = await user_1[_0x1dbccb(0x143)][_0x1dbccb(0x183)]({ 'email': _0x10573d });
                if (!_0x19840f)
                    return _0x1dbccb(0x15d) !== _0x1dbccb(0x16b) ? (_0x35bb09[_0x1dbccb(0x14f)](_0x1dbccb(0x187), _0x1dbccb(0x147)), console['log'](_0x1dbccb(0x186)), _0x4d132a[_0x1dbccb(0x181)](_0x1dbccb(0x17e))) : (_0x56ec48[_0x1dbccb(0x14f)](_0x1dbccb(0x187), _0x1dbccb(0x14c)), _0x26d1e5[_0x1dbccb(0x169)]('[SERVER]:\x20New\x20Password\x20confirmation\x20failed.'), _0x539580[_0x1dbccb(0x181)](_0x1dbccb(0x166)));
                if (_0x2ba74a !== _0x19840f['password'])
                    return _0x1dbccb(0x162) === _0x1dbccb(0x13e) ? (_0x3a1956[_0x1dbccb(0x14f)]('notification', _0x1dbccb(0x17c)), _0x2507a6[_0x1dbccb(0x179)](_0x1dbccb(0x144), _0x1cf84e), _0x290c06[_0x1dbccb(0x181)]('back')) : (_0x35bb09[_0x1dbccb(0x14f)](_0x1dbccb(0x187), _0x1dbccb(0x163)), console[_0x1dbccb(0x169)](_0x1dbccb(0x150)), _0x4d132a[_0x1dbccb(0x181)](_0x1dbccb(0x17e)));
                const {
                        id: _0x104bc8,
                        name: _0x54fd3d
                    } = _0x19840f, _0x2791f5 = {
                        'id': _0x104bc8,
                        'name': _0x54fd3d,
                        'email': _0x10573d
                    };
                return _0x35bb09[_0x1dbccb(0x14b)][_0x1dbccb(0x159)] = _0x2791f5, _0x35bb09[_0x1dbccb(0x14f)]('notification', _0x1dbccb(0x158) + _0x54fd3d[_0x1dbccb(0x168)]('\x20')[0x0] + '.'), console[_0x1dbccb(0x169)]('[SERVER]:\x20User\x20logged\x20in.'), _0x4d132a['redirect'](_0x1dbccb(0x17e));
            }
        } catch (_0xe528df) {
            return _0x1dbccb(0x151) === _0x1dbccb(0x151) ? (_0x35bb09[_0x1dbccb(0x14f)]('notification', _0x1dbccb(0x17c)), console[_0x1dbccb(0x179)]('[SERVER]:\x20Sign\x20in\x20error.', _0xe528df), _0x4d132a[_0x1dbccb(0x181)](_0x1dbccb(0x17e))) : (_0x39b096[_0x1dbccb(0x14f)](_0x1dbccb(0x187), _0x1dbccb(0x171)), _0x1e2bea[_0x1dbccb(0x169)](_0x1dbccb(0x14e)), _0x4963d5[_0x1dbccb(0x181)](_0x1dbccb(0x17e)));
        }
    };
exports[a2_0x590d46(0x14d)] = signIn;
const signOut = async (_0x1542bc, _0x46b35f) => {
    const _0x28bee1 = a2_0x590d46;
    try {
        if (_0x28bee1(0x155) !== _0x28bee1(0x167)) {
            if (!_0x1542bc[_0x28bee1(0x14b)]['user'])
                return _0x28bee1(0x170) !== _0x28bee1(0x170) ? (_0x4c5ee5[_0x28bee1(0x14f)](_0x28bee1(0x187), _0x28bee1(0x17b)), _0x20241a[_0x28bee1(0x169)](_0x28bee1(0x185)), _0x53a22e[_0x28bee1(0x181)](_0x28bee1(0x166))) : (_0x1542bc['flash'](_0x28bee1(0x187), _0x28bee1(0x171)), console[_0x28bee1(0x169)](_0x28bee1(0x14e)), _0x46b35f['redirect'](_0x28bee1(0x17e)));
            const {name: _0x2ffe3f} = _0x1542bc[_0x28bee1(0x14b)][_0x28bee1(0x159)];
            _0x1542bc[_0x28bee1(0x14b)][_0x28bee1(0x15b)](_0x19a85d => {
                const _0x458c1d = _0x28bee1;
                if (_0x458c1d(0x13b) !== _0x458c1d(0x14a)) {
                    if (_0x19a85d)
                        throw _0x19a85d;
                    return _0x46b35f[_0x458c1d(0x184)](config_1[_0x458c1d(0x177)][_0x458c1d(0x148)]), console[_0x458c1d(0x169)]('[SERVER]:\x20' + _0x2ffe3f + _0x458c1d(0x15c)), _0x46b35f[_0x458c1d(0x181)](_0x458c1d(0x17e));
                } else
                    return _0x2cd3dc[_0x458c1d(0x14f)](_0x458c1d(0x187), _0x458c1d(0x171)), _0x487c32['error'](_0x458c1d(0x13c), _0x33ac5), _0x5d88f7[_0x458c1d(0x181)](_0x458c1d(0x17e));
            });
        } else
            return _0x38e4e4['flash'](_0x28bee1(0x187), _0x28bee1(0x142)), _0x14f882['log'](_0x28bee1(0x188)), _0x5828a3[_0x28bee1(0x181)](_0x28bee1(0x166));
    } catch (_0x335bd7) {
        return 'Zbesp' === 'Zbesp' ? (_0x1542bc[_0x28bee1(0x14f)](_0x28bee1(0x187), _0x28bee1(0x171)), console[_0x28bee1(0x179)]('[SERVER]:\x20Sign\x20out\x20error.', _0x335bd7), _0x46b35f[_0x28bee1(0x181)]('back')) : (_0x59e731[_0x28bee1(0x14f)](_0x28bee1(0x187), _0x28bee1(0x163)), _0x1db5b2[_0x28bee1(0x169)](_0x28bee1(0x150)), _0x4f413e[_0x28bee1(0x181)](_0x28bee1(0x17e)));
    }
};
exports[a2_0x590d46(0x157)] = signOut;
function a2_0x3868(_0x5f2f24, _0x470c72) {
    const _0x18512e = a2_0x1851();
    return a2_0x3868 = function (_0x386829, _0x564963) {
        _0x386829 = _0x386829 - 0x13b;
        let _0x1a0c72 = _0x18512e[_0x386829];
        return _0x1a0c72;
    }, a2_0x3868(_0x5f2f24, _0x470c72);
}
const updatePassword = async (_0x491448, _0x214c3e) => {
    const _0x50cb6d = a2_0x590d46;
    try {
        if (_0x50cb6d(0x178) === _0x50cb6d(0x15e))
            return _0x4f32ee && _0x223e11[_0x50cb6d(0x180)] ? _0x5418f8 : { 'default': _0x3d127a };
        else {
            const {
                    password: _0x44b7e3,
                    passwordConfirmation: _0x177e6c,
                    oldPassword: _0x56c36f
                } = _0x491448[_0x50cb6d(0x15f)], {id: _0x21f87b} = _0x491448[_0x50cb6d(0x14b)][_0x50cb6d(0x159)], _0x543583 = await user_1['User'][_0x50cb6d(0x152)](_0x21f87b);
            if (!_0x543583) {
                if (_0x50cb6d(0x141) === _0x50cb6d(0x165)) {
                    if (_0x2d6bbf)
                        throw _0x408776;
                    return _0xfbedb8['clearCookie'](_0x2e0194['default']['SESSION_COLLECTION_NAME']), _0x245ea4['log'](_0x50cb6d(0x146) + _0x2aaa0b + _0x50cb6d(0x15c)), _0x2e3e88['redirect'](_0x50cb6d(0x17e));
                } else
                    return _0x491448[_0x50cb6d(0x14f)](_0x50cb6d(0x187), _0x50cb6d(0x17b)), console[_0x50cb6d(0x169)](_0x50cb6d(0x185)), _0x214c3e[_0x50cb6d(0x181)]('/password');
            }
            if (_0x543583[_0x50cb6d(0x145)] !== _0x56c36f)
                return _0x50cb6d(0x13d) !== _0x50cb6d(0x140) ? (_0x491448[_0x50cb6d(0x14f)](_0x50cb6d(0x187), _0x50cb6d(0x142)), console[_0x50cb6d(0x169)](_0x50cb6d(0x188)), _0x214c3e[_0x50cb6d(0x181)](_0x50cb6d(0x166))) : (_0x42fb51['flash'](_0x50cb6d(0x187), _0x50cb6d(0x147)), _0x139d94[_0x50cb6d(0x169)](_0x50cb6d(0x186)), _0x1bf82c[_0x50cb6d(0x181)]('back'));
            if (_0x44b7e3 !== _0x177e6c) {
                if (_0x50cb6d(0x16c) === _0x50cb6d(0x153)) {
                    if (!_0x34b83e['session'][_0x50cb6d(0x159)])
                        return _0xe54c8[_0x50cb6d(0x14f)]('notification', _0x50cb6d(0x171)), _0x1a70a4[_0x50cb6d(0x169)](_0x50cb6d(0x14e)), _0x5454fc[_0x50cb6d(0x181)](_0x50cb6d(0x17e));
                    const {name: _0x1bd894} = _0x1ad1f2[_0x50cb6d(0x14b)]['user'];
                    _0x2134a5[_0x50cb6d(0x14b)][_0x50cb6d(0x15b)](_0x48e393 => {
                        const _0x2bbff4 = _0x50cb6d;
                        if (_0x48e393)
                            throw _0x48e393;
                        return _0x3a8347[_0x2bbff4(0x184)](_0x36cc0d[_0x2bbff4(0x177)][_0x2bbff4(0x148)]), _0x50955c[_0x2bbff4(0x169)](_0x2bbff4(0x146) + _0x1bd894 + _0x2bbff4(0x15c)), _0xc635fd[_0x2bbff4(0x181)](_0x2bbff4(0x17e));
                    });
                } else
                    return _0x491448[_0x50cb6d(0x14f)]('notification', _0x50cb6d(0x14c)), console[_0x50cb6d(0x169)](_0x50cb6d(0x16d)), _0x214c3e['redirect'](_0x50cb6d(0x166));
            }
            return await user_1[_0x50cb6d(0x143)][_0x50cb6d(0x175)](_0x21f87b, { '$set': { 'password': _0x44b7e3 } }), _0x491448['flash'](_0x50cb6d(0x187), _0x50cb6d(0x17a)), console[_0x50cb6d(0x169)](_0x50cb6d(0x17d)), _0x214c3e[_0x50cb6d(0x181)]('/');
        }
    } catch (_0x3e50f4) {
        return _0x491448[_0x50cb6d(0x14f)]('notification', 'Terjadi\x20kesalahan\x20saat\x20mencoba\x20memperbarui\x20password,\x20coba\x20lagi.'), console[_0x50cb6d(0x169)](_0x50cb6d(0x16f)), _0x214c3e[_0x50cb6d(0x181)](_0x50cb6d(0x166));
    }
};
exports[a2_0x590d46(0x174)] = updatePassword;