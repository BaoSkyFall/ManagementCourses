$(document).ready(function () {
    function Clear() {
        $('#DSKH__TT').html("");
        $('#DSKH__HV').html("")
    }
    var jsonThongTinTK = localStorage.getItem("UserLocal");
    var thongtinTK = JSON.parse(jsonThongTinTK);
    var hello= `Xin Chào, ${thongtinTK.HoTen}`;
    $('#hello').html(hello);
    var DSKHNguoiDung = new DanhSachKhoaHoc();
    var DSKHServer = new DanhSachKhoaHoc();
    var DSKHKhongHA = new NguoiDungService();
    var nguoidung;
    DSKHKhongHA.AjaxLayKhoaHocNguoiDung(thongtinTK.TaiKhoan).done(function (kq) {

        DSKHNguoiDung.DSKH = kq;

    })
        .fail(function (kq) {
            console.log(kq);
        })
    var DSKH = new NguoiDungService();
    DSKH.AjaxLayDanhSachKhoaHoc().done(function (kq) {
        DSKHServer.DSKH = kq;

    })
        .fail(function (kq) {
            console.log(kq);
        })
    var DSKHCoHA = new DanhSachKhoaHoc();

    setTimeout(function () {
        var DSKH__TT__HTML = "";
        $('#DSKH__TT').html(DSKH__TT__HTML);
        for (var i = 0; i < DSKHServer.DSKH.length; i++) {
            DSKH__TT__HTML += `<div class="col-3 mr-3 mb-3">
            <a href="${DSKHServer.DSKH[i].HinhAnh}" style="text-decoration:none"><div style="min-height:120px!important">
            <img class="img-fluid" style="max-height:120px!important" src="${DSKHServer.DSKH[i].HinhAnh}">
            
            </div>
            <h2 class="text-success">${DSKHServer.DSKH[i].TenKhoaHoc}</h2>
            <p class="text-seccondary">Lượt Xem: ${DSKHServer.DSKH[i].LuotXem}</p>
            
        
         
            </a>
            <button class="btn btn-primary" style="font-size:15px!important" type="button" data-toggle="collapse" data-target="#ChiTiet${i}" aria-expanded="false">Chi Tiết</button>
            <div class="collapse" id="ChiTiet${i}">
            <div class="card card-body">
            ${DSKHServer.DSKH[i].MoTa}
            </div>
            </div>
            </div>`
        }
        $('#DSKH__TT').html(DSKH__TT__HTML);
        $("#KHTT").bind('click', function () {
            Clear();
            var DSKH__TT__HTML = "";
            $('#DSKH__TT').html(DSKH__TT__HTML);
            for (var i = 0; i < DSKHServer.DSKH.length; i++) {
                DSKH__TT__HTML += `<div class="col-3 mr-3 mb-3">
            <a href="${DSKHServer.DSKH[i].HinhAnh}" target="_blank" style="text-decoration:none"><div style="min-height:120px!important">
            <img class="img-fluid" style="max-height:120px!important" src="${DSKHServer.DSKH[i].HinhAnh}">
            
            </div>
            <h2 class="text-success">${DSKHServer.DSKH[i].TenKhoaHoc}</h2>
            <p class="text-seccondary">Lượt Xem: ${DSKHServer.DSKH[i].LuotXem}</p>
            <button class="btn btn-primary" style="font-size:15px!important" type="button" data-toggle="collapse" data-target="#ChiTiet${i}" aria-expanded="false">Chi Tiết</button>
            <div class="collapse" id="ChiTiet${i}">
            <div class="card card-body">
            ${DSKHServer.DSKH[i].MoTa}
            </div>
            </div>
            </div>
            </a>`
            }
            $('#DSKH__TT').html(DSKH__TT__HTML);
        })
        $('#KHHV').bind('click', function () {
            Clear();
            DSKHCoHA.DSKH = [];
            for (var i = 0; i < DSKHServer.DSKH.length; i++) {
                for (var j = 0; j < DSKHNguoiDung.DSKH.length; j++) {
                    if (DSKHServer.DSKH[i].MaKhoaHoc === DSKHNguoiDung.DSKH[j].MaKhoaHoc) {
                        DSKHCoHA.DSKH.push(DSKHServer.DSKH[i]);
                    }
                }
            }
            console.log(DSKHCoHA);
            var DSKH__HV__HTML = "";
            $('#DSKH__HV').html(DSKH__HV__HTML);

            for (var i = 0; i < DSKHCoHA.DSKH.length; i++) {
                DSKH__HV__HTML += `<div class="col-3 mr-3">
                <a href="${DSKHServer.DSKH[i].HinhAnh}" target="_blank" style="text-decoration:none"><div style="min-height:120px!important">
            <img class="img-fluid" style="max-height:160px!important"  src="${DSKHCoHA.DSKH[i].HinhAnh}">
            
            </div>
            <h2 class="text-success">${DSKHCoHA.DSKH[i].TenKhoaHoc}</h2>
            <p class="text-seccondary">Lượt Xem: ${DSKHCoHA.DSKH[i].LuotXem}</p>
            <button class="btn btn-primary" style="font-size:15px" type="button" data-toggle="collapse" data-target="#ChiTiet${i}" aria-expanded="false">Chi Tiết</button>
            <div class="collapse" id="ChiTiet${i}">
            <div class="card card-body">
            ${DSKHCoHA.DSKH[i].MoTa}
            </div>
            </div>
            </div>`
            }
            $('#DSKH__HV').html(DSKH__HV__HTML);

        })
        $("#TTTK").bind('click', function () {
            Clear();
            var matkhau;
            jsonThongTinTK = localStorage.getItem("UserLocal");
            thongtinTK = JSON.parse(jsonThongTinTK);
            console.log(thongtinTK);
            var DSNDCoMK = new NguoiDungService();
            DSNDCoMK.AjaxLayThongTinNguoiDung().done(function (kq) {
                for (var i = 0; i < kq.length; i++) {
                    if (thongtinTK.TaiKhoan === kq[i].TaiKhoan) {
                        matkhau = kq[i].MatKhau;

                        return;
                    }
                }

                // var nguoidung= new NguoiDung(thongtinTK);

            })
            setTimeout(function () {
                nguoidung = new NguoiDung(thongtinTK.TaiKhoan, matkhau, thongtinTK.HoTen, thongtinTK.Email, thongtinTK.SoDT, thongtinTK.MaLoaiNguoiDung, thongtinTK.TenLoaiNguoiDung);
                $('#vl__hoten').val(nguoidung.HoTen);
                $('#vl__taikhoan').val(nguoidung.TaiKhoan);
                $('#vl__matkhau').val(matkhau);
                $('#vl__email').val(nguoidung.Email);
                $('#vl__sdt').val(nguoidung.SoDT);
                $('#vl__mand').val(nguoidung.MaLoaiNguoiDung);

            }, 200)



        }
        )
        $('#btn__suathongtin').bind('click', function () {
            var SuaNguoiDung = new NguoiDungService();
            nguoidung.HoTen = $('#vl__hoten').val();
            nguoidung.TaiKhoan = $('#vl__taikhoan').val();
            nguoidung.MatKhau = $('#vl__matkhau').val();
            nguoidung.Email = $('#vl__email').val();
            nguoidung.SoDT = $('#vl__sdt').val();
            nguoidung.MaLoaiNguoiDung = $('#vl__mand').val();
            SuaNguoiDung.AjaxSuaThongTinNguoiDung(nguoidung).done(function (kq) {
                localStorage.setItem('UserLocal', JSON.stringify(kq));
                jsonThongTinTK = localStorage.getItem("UserLocal");
                thongtinTK = JSON.parse(jsonThongTinTK);
                swal({
                    position: 'mid',
                    type: 'success',
                    title: 'Bạn Đã sửa thành công',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
        })
        $('#SOut').bind('click', function () {
            localStorage.clear();
            window.location.assign('signin.html');
        })
    }, 200)



})