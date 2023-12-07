import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div>
          <h1>Thông Tin</h1>

          <div>
            <p>Giới thiệu Maison</p>
            <p>Blog</p>
            <p>Hệ thống cửa hàng</p>
            <p>Tuyển dụng</p>
            <p>Thông tin liên hệ</p>
          </div>
        </div>

        <div>
          <h1>Trợ giúp</h1>

          <div>
            <p>Phương thức thanh toán</p>
            <p>Chính sách khách hàng thân thiết</p>
            <p>Hướng dẫn chi tiết sử dụng Loyalty Program</p>
            <p>Chính sách giao hàng</p>
            <p>Chính sách mua hàng</p>
            <p>Chính sách đổi trả</p>
            <p>CHính sách bảo hành</p>
            <p>Chính sách bảo mật</p>
          </div>
        </div>

        <div>
          <h1>Thanh Toán</h1>

          <div>
            <p>Visa / Mastercard / JCB</p>
            <p>ATM / Internet Banking</p>
            <p>Quét mã QR</p>
            <p>Ví điện tử</p>
            <p>Thanh toán khi nhận hàng (COD)</p>
          </div>
        </div>

        <div>
          <h1>Giao hàng</h1>

          <div>
            <p>Maison NOW</p>
            <p>Giao hàng tiêu chuẩn</p>
            <img
              src="../../../public/image/footer-logo.svg"
              alt="Image Description"
              width="300px"
              height="300px"
            />
          </div>
        </div>
      </div>

      <div className="footer-info-2">
        <div>
          <p>
            © Copyright 2020 MAISON RETAIL MANAGEMENT INTERNATIONAL CORPORATION.
            All rights reserved.{" "}
          </p>
          <p>
            Địa chỉ: 189 - 197, Dương Bá Trạc, Phường 1, Quận 8, TP.Hồ Chí Minh
            | MST: 0313175103 | Hotline: 1900 252 538
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
