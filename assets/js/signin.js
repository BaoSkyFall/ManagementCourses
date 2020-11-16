$(document).ready(function () {
    var temp = 0;
    $('#btn__si').bind('click', function Signin() {
        var tk = $('#vl_sitk').val();
        var mk = $('#vl_simk').val();
        // console.log(tk, mk);
        var NguoiDungSV = new NguoiDungService();
        NguoiDungSV.AjaxDangNhap(tk, mk).done(function (kq) {
            if (kq !== 'failed to login') {
                console.log(kq);
                localStorage.setItem('UserLocal', JSON.stringify(kq[0]));
                if (kq[0].MaLoaiNguoiDung === "HV") {
                    window.location.assign('mycourses.html');

                }
                else {
                    window, location.assign('dashboard.html')
                }
            }
            else {
                temp=1;
                swal({
                    type: 'error',
                    title: 'Sai Mật Khẩu hoặc Tài Khoản',
                    text: '',
                    footer: ''
                })
            }
        })
            .fail(function (kq) {
                console.log(kq);
            })
    })
    $(document).keypress(function (e) {
        if (e.which == 13) {
            if (temp == 0) {
                $('#btn__si').trigger('click');

            }
        }
    });

})