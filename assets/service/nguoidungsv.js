function NguoiDungService() {

}
NguoiDungService.prototype.AjaxDangNhap = function (taikhoan, matkhau) {
    return $.ajax(
        {
            type: "GET",
            url: ` http://sv.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`,
        }
    )
}
NguoiDungService.prototype.AjaxLayKhoaHocNguoiDung = function (taikhoan) {
    return $.ajax(
        {
            type: "GET",
            url: ` http://sv.myclass.vn/api/QuanLyTrungTam/LayThongTinKhoaHoc?taikhoan=${taikhoan}`
        }
    )
}
NguoiDungService.prototype.AjaxLayDanhSachKhoaHoc = function () {
    return $.ajax(
        {
            type: "GET",
            url: "http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc"
        }
    )
}
NguoiDungService.prototype.AjaxLayThongTinNguoiDung = function () {
    return $.ajax(
        {
            type: "GET",
            url: " http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung"
        }
    )
}
NguoiDungService.prototype.AjaxSuaThongTinNguoiDung = function (nguoidung) {
    var nd = JSON.stringify(nguoidung);
    return $.ajax(
        {
            type: "PUT",
            url: "http://sv.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung",
            contentType: "application/json",
            data: nd,
        }
    )
}
NguoiDungService.prototype.AjaxThemNguoiDung = function (nguoidung) {
    var nd = JSON.stringify(nguoidung);
    return $.ajax({
        type: "POST",
        url: "http://sv.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
        contentType: "application/json",
        data: nd,
    })
}
NguoiDungService.prototype.AjaxXoaNguoiDung = function (id)
{
    return $.ajax({
        type:"DELETE",
        url:`http://sv.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`,
    })
}
