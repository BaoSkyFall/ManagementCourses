$(document).ready(function () {
    var jsonThongTinTK = localStorage.getItem("UserLocal");
    var thongtinTK = JSON.parse(jsonThongTinTK);
    var hello= `Xin Chào, ${thongtinTK.HoTen}`
    $('.profile-text').html(hello);
    var thongtinkhoahoc = new AdminService();
    var danhsachkhoahoc = new DanhSachKhoaHoc();
    var nguoidung = new NguoiDung();
    thongtinkhoahoc.LayThongTinKhoaHoc().done(function (kq) {
        $('#number__kh').html(kq.length);
        danhsachkhoahoc.DSKH = kq;
    })
    var thongtinnguoidung = new AdminService();
    var danhsachnguoidung = new DanhSachNguoiDung();
    thongtinnguoidung.LayThongTinNguoiDung().done(function (kq) {
        console.log(kq);
        $('#number__nd').html(kq.length);
        danhsachnguoidung.DSND = kq;
    })
    var thongtinhocvien = new AdminService();
    thongtinhocvien.LayThongTinHocVien().done(function (kq) {
        $('#number__hv').html(kq.length);
    })
    setTimeout(function () {
        var bodyKH;
        var bodyND;
        console.log(danhsachkhoahoc.DSKH.length);
        for (var i = 0; i < danhsachkhoahoc.DSKH.length; i++) {
            bodyKH += `
        <tr>
        <td>
        <div class="form-check">
        <input class="form-check-input cbKhoaHoc" type="checkbox"  value="${danhsachkhoahoc.DSKH[i].MaKhoaHoc}">
        </div>
        </td>
        <td>${danhsachkhoahoc.DSKH[i].MaKhoaHoc}</td>
        <td>${danhsachkhoahoc.DSKH[i].TenKhoaHoc}</td>
        <td>${danhsachkhoahoc.DSKH[i].LuotXem}</td>
        <td><img src="${danhsachkhoahoc.DSKH[i].HinhAnh}"></td>
        <td>${danhsachkhoahoc.DSKH[i].NguoiTao}</td>
        <td>
        <button
        data-makh="${danhsachkhoahoc.DSKH[i].MaKhoaHoc}"
        data-tenkh="${danhsachkhoahoc.DSKH[i].TenKhoaHoc}"
        data-mota="${danhsachnguoidung.DSND[i].MoTa}"
        data-luotxem="${danhsachkhoahoc.DSKH[i].LuotXem}"
        data-hinhanh="${danhsachkhoahoc.DSKH[i].HinhAnh}"
        data-nguoitao="${danhsachkhoahoc.DSKH[i].NguoiTao}"
        class="btn btn-success" id="btn__sua__kh">Sửa</button>
        <button 
        data-makh="${danhsachkhoahoc.DSKH[i].MaKhoaHoc}"
        class="btn btn-danger" id="btn__xoa__kh">Xóa</button>
        </td>
        </tr>
        `
        }
        $('#tbodyKH').html(bodyKH);


        for (var i = 0; i < danhsachnguoidung.DSND.length; i++) {
            bodyND += `
        <tr>
        <td>
        <div class="form-check">
  <input class="form-check-input cbNguoiDung" type="checkbox"  value="${danhsachnguoidung.DSND[i].TaiKhoan}">
  </div>
        </td>
        <td id="tk_${i}">${danhsachnguoidung.DSND[i].TaiKhoan}</td>
        <td id="mk_${i}">${danhsachnguoidung.DSND[i].MatKhau}</td>
        <td id="ht_${i}">${danhsachnguoidung.DSND[i].HoTen}</td>
        <td id="email_${i}">${danhsachnguoidung.DSND[i].Email}</td>
        <td id="sdt_${i}">${danhsachnguoidung.DSND[i].SoDT}</td>
        <td id="mand_${i}">${danhsachnguoidung.DSND[i].MaLoaiNguoiDung}</td>
        <td id="tennd_${i}">${danhsachnguoidung.DSND[i].TenLoaiNguoiDung}</td>
        
        <td>
        <button id="btn__sua" 
        data-taikhoan="${danhsachnguoidung.DSND[i].TaiKhoan}"
                data-matkhau="${danhsachnguoidung.DSND[i].MatKhau}"
                data-hoten="${danhsachnguoidung.DSND[i].HoTen}"
                data-email="${danhsachnguoidung.DSND[i].Email}"
                data-sdt="${danhsachnguoidung.DSND[i].SoDT}"
                data-mand="${danhsachnguoidung.DSND[i].MaLoaiNguoiDung}"
                data-tennd="${danhsachnguoidung.DSND[i].TenLoaiNguoiDung}"
        class="btn btn-success">Sửa</button>
        <button id="btn__xoa" 
        data-taikhoan="${danhsachnguoidung.DSND[i].TaiKhoan}"
          class="btn btn-danger">Xóa</button>
        </td>
        </tr>
        `
        }
        $('#tbodyND').html(bodyND);
        $('#btn__themnd').bind('click', function () {
            $('#modal__title').html('Thêm Người Dùng');
            $('#btn__modal').trigger('click');
        })
        $('body').delegate('#btn__sua', 'click', function () {
            $('#vl__tk').val($(this).attr('data-taikhoan'))
            $('#vl__mk').val($(this).attr('data-matkhau'));
            $('#vl__ht').val($(this).attr('data-hoten'));
            $('#vl__email').val($(this).attr('data-email'));
            $('#vl__sdt').val($(this).attr('data-sdt'));
            $('#vl__loaind').val($(this).attr('data-mand'));
            $('#vl__tk').attr("readonly", true);
            $('#vl__tk').css("cursor", "not-allowed");
            var tenloaind;
            if ($(this).attr('data-mand') == "HV") {
                tenloaind = "Học Viên";
            }
            else {
                tenloaind = "Giáo Vụ";

            }
            $('#modal__title').html('Sửa Người Dùng');

            $('#modal__btn__success').html('Sửa');
            $('#btn__modal').trigger('click');

        })
        $('#modal__btn__success').bind('click', function () {
            var tk = $('#vl__tk').val();
            var mk = $('#vl__mk').val();
            var ht = $('#vl__ht').val();
            var email = $('#vl__email').val();
            var sdt = $('#vl__sdt').val();
            var loaind = $('#vl__loaind').val();

            var tenloaind;
            if (loaind == "HV") {
                tenloaind = "Học Viên";
            }
            else {
                tenloaind = "Giáo Vụ"
            }
            if (($(this).html()) == "Thêm Người Dùng") {
                nguoidung = new NguoiDung(tk, mk, ht, email, sdt, loaind, tenloaind);
                var themnnd = new NguoiDungService();
                themnnd.AjaxThemNguoiDung(nguoidung).done(function (kq) {
                    console.log(kq);
                    $('#modal__btn__close').trigger('click');
                    $("input").val("");
                    location.reload();
                })
            }
            else {
                nguoidung = new NguoiDung(tk, mk, ht, email, sdt, loaind, tenloaind);
                var suannd = new NguoiDungService();
                suannd.AjaxSuaThongTinNguoiDung(nguoidung).done(function (kq) {
                    console.log(kq);
                    $('#modal__btn__close').trigger('click');
                    $("input").val("");
                    location.reload();
                })
            }


        })
        $('body').delegate('#btn__xoa', 'click', function () {
            var taikhoan = ($(this).attr('data-taikhoan'));
            var xoand = new NguoiDungService();
            xoand.AjaxXoaNguoiDung(taikhoan).done(function (kq) {
                console.log(kq);
                location.reload();

            })

        })
        $('#tukhoa').keyup(function () {
            var mangND = [];
            var tukhoa = $(this).val();
            mangND = danhsachnguoidung.TimNguoiDungTheoTen(tukhoa);
            bodyND = "";
            for (var i = 0; i < mangND.length; i++) {
                bodyND += `
            <tr>
            <td>
            <div class="form-check">
      <input class="form-check-input cbNguoiDung" type="checkbox" value="${mangND[i].TaiKhoan}">
      </div>
            </td>
            <td id="tk_${i}">${mangND[i].TaiKhoan}</td>
            <td id="mk_${i}">${mangND[i].MatKhau}</td>
            <td id="ht_${i}">${mangND[i].HoTen}</td>
            <td id="email_${i}">${mangND[i].Email}</td>
            <td id="sdt_${i}">${mangND[i].SoDT}</td>
            <td id="mand_${i}">${mangND[i].MaLoaiNguoiDung}</td>
            <td id="tennd_${i}">${mangND[i].TenLoaiNguoiDung}</td>
            
            <td>
            <button id="btn__sua" 
            data-taikhoan="${mangND[i].TaiKhoan}"
                    data-matkhau="${mangND[i].MatKhau}"
                    data-hoten="${mangND[i].HoTen}"
                    data-email="${mangND[i].Email}"
                    data-sdt="${mangND[i].SoDT}"
                    data-mand="${mangND[i].MaLoaiNguoiDung}"
                    data-tennd="${mangND[i].TenLoaiNguoiDung}"
            class="btn btn-success">Sửa</button>
            <button id="btn__xoa" 
            data-taikhoan="${mangND[i].TaiKhoan}"
              class="btn btn-danger">Xóa</button>
            </td>
            </tr>
            `
            }

            $('#tbodyND').html(bodyND);


        })
        $("#btn__xoand").bind('click', function () {
            var mangTaiKhoan = [];
            $('.cbNguoiDung').each(function () {
                if ($(this).is(':checked')) {
                    mangTaiKhoan.push($(this).val());
                }
            })
            console.log(mangTaiKhoan);
            for (var i = 0; i < mangTaiKhoan.length; i++) {
                var xoand = new NguoiDungService();
                xoand.AjaxXoaNguoiDung(mangTaiKhoan[i]).done(function (kq) {
                    console.log(kq);
                })
            }
            danhsachnguoidung.XoaNhieuNguoiDung(mangTaiKhoan);
            location.reload();

        }
        )
        $('#btn__themKH').bind('click', function () {
            var danhsachgiaovien = new DanhSachNguoiDung();
            for (var i = 0; i < danhsachnguoidung.DSND.length; i++) {
                if (danhsachnguoidung.DSND[i].MaLoaiNguoiDung === "GV") {
                    danhsachgiaovien.ThemNguoiDung(danhsachnguoidung.DSND[i]);
                }
            }
            console.log(danhsachgiaovien);
            var nguoitaohtml;
            for (var i = 0; i < danhsachgiaovien.DSND.length; i++) {
                nguoitaohtml += `
            <option value="${danhsachgiaovien.DSND[i].HoTen}">${danhsachgiaovien.DSND[i].HoTen}</option>
            `
            }
            // console.log(nguoitaohtml);
            $('#nguoitao').html(nguoitaohtml);
            $('#btn__modal').trigger('click');
        })
        $('#modal__btn__success').bind('click', function () {
            var makh = $('#vl__makh').val();
            var tenkh = $('#vl__tenkh').val();
            var mota = $('#vl__mota').val();
            var luotxem = $('#vl__luotxem').val();
            var hinhanh = $('#vl__hinhanh').val();
            var nguoitao = $('#nguoitao').val();
            var kh = new KhoaHoc(makh, tenkh, mota, hinhanh, luotxem, nguoitao)
            // console.log(kh);
            // var khoaHoc ={
            //     MaKhoaHoc: maKH,
            //     TenKhoaHoc: tenkh,
            //     MoTa: mota,
            //     HinhAnh: hinhanh,
            //     LuotXem: luotxem,
            //     NguoiTao: nguoitao
            // }
            var themkh = new AdminService();
            themkh.ThemKhoaHoc(kh).done(function (kq) {
                console.log(kq);
                $("#modal__btn__close").trigger('click');
                $('input').val("");
            })
        })
        $('body').delegate('#btn__sua__kh', 'click', function () {
            $('#vl__tenkh').val($(this).attr('data-tenkh'))
            $('#vl__makh').val($(this).attr('data-makh'));
            $('#vl__mota').val($(this).attr('data-mota'));
            $('#vl__luotxem').val($(this).attr('data-luotxem'));
            $('#vl__hinhanh').val($(this).attr('data-hinhanh'));
            $('#vl__nguoitao').val($(this).attr('data-nguoitao'));
            $('#vl__makh').attr("readonly", true);
            $('#vl__makh').css("cursor", "not-allowed");

            $('#modal__title').html('Sửa Khóa Học');

            $('#modal__btn__success').html('Sửa');
            $('#btn__modal').trigger('click');
        })
        $('body').delegate('#btn__xoa__kh', 'click', function () {

            var makh = ($(this).attr('data-makh'));
            var xoakh = new AdminService();
            xoakh.XoaKhoaHoc(makh).done(function (kq) {
                console.log(kq);
                location.reload();
                
            })

        })
        $('body').delegate('#btn__xoa', 'click', function () {
            var taikhoan = ($(this).attr('data-taikhoan'));
            var xoand = new NguoiDungService();
            xoand.AjaxXoaNguoiDung(taikhoan).done(function (kq) {
                console.log(kq);
                location.reload();

            })

        })
        $("#btn__xoaKH").bind('click', function () {
            var mangMaKH = [];
            $('.cbKhoaHoc').each(function () {
                if ($(this).is(':checked')) {
                    mangMaKH.push($(this).val());
                }
            })
            console.log(mangMaKH);
            for (var i = 0; i < mangMaKH.length; i++) {
                var xoand = new NguoiDungService();
                xoand.AjaxXoaNguoiDung(mangMaKH[i]).done(function (kq) {
                    console.log(kq);
                })
            }
            danhsachkhoahoc.XoaNhieuKhoaHoc(mangMaKH);
            location.reload();

        }
        )
        $('#tukhoa__kh').keyup(function () {
            var mangKH = [];
            var tukhoa = $(this).val();
            mangKH = danhsachkhoahoc.TimKhoaHocTheoTen(tukhoa);
            bodyKH = "";
            for (var i = 0; i < mangKH.length; i++) {
                bodyKH += `
                <tr>
                <td>
                <div class="form-check">
                <input class="form-check-input cbKhoaHoc" type="checkbox"  value="${mangKH[i].MaKhoaHoc}">
                </div>
                </td>
                <td>${mangKH[i].MaKhoaHoc}</td>
                <td>${mangKH[i].TenKhoaHoc}</td>
                <td>${mangKH[i].LuotXem}</td>
                <td><img src="${mangKH[i].HinhAnh}"></td>
                <td>${mangKH[i].NguoiTao}</td>
                <td>
                <button
                data-makh="${mangKH[i].MaKhoaHoc}"
                data-tenkh="${mangKH[i].TenKhoaHoc}"
                data-mota="${mangKH[i].MoTa}"
                data-luotxem="${mangKH[i].LuotXem}"
                data-hinhanh="${mangKH[i].HinhAnh}"
                data-nguoitao="${mangKH[i].NguoiTao}"
                class="btn btn-success" id="btn__sua__kh">Sửa</button>
                <button 
                data-makh="${mangKH[i].MaKhoaHoc}"
                class="btn btn-danger" id="btn__xoa__kh">Xóa</button>
                </td>
                </tr>
                `
            }

            $('#tbodyKH').html(bodyKH);


        })
        $('#SignOut').bind('click', function () {
            localStorage.clear();
            window.location.assign('signin.html');
        })

    }, 200)
})