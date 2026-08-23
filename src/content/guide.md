## <span id="quick-start">Bắt đầu nhanh</span>

1. Tải VKey từ trang phát hành chính thức hoặc cài bằng WinGet.
2. Tắt các bộ gõ tiếng Việt khác để tránh hai chương trình cùng xử lý một phím.
3. Mở VKey, chọn **Telex**, **VNI**, **Telex + VNI** hoặc kiểu gõ tự định nghĩa.
4. Chọn chế độ `V` để gõ tiếng Việt và `E` để tạm dừng xử lý phím.

```powershell
winget install PhatMT97.VKey
```

> Nếu một ứng dụng gõ không đúng, đừng đổi thiết lập chung ngay. Hãy tạo cấu hình riêng cho ứng dụng đó và thử một cách gửi khác.

## <span id="typing-method">Kiểu gõ và bảng mã</span>

VKey hỗ trợ các kiểu gõ sau:

- **Telex:** dùng chữ để đặt dấu và biến đổi nguyên âm.
- **VNI:** dùng phím số để đặt dấu.
- **Telex + VNI:** nhận cả hai cách gõ trong cùng một cấu hình.
- **Simple Telex:** giữ giá trị gốc của `w`, `[` và `]` trong nhiều tình huống hơn.
- **Tự định nghĩa:** cho phép gán lại các phím đặt dấu.

Các bảng mã gồm Unicode, TCVN3, VNI Windows, Unicode Compound và Vietnamese Locale. Với phần lớn ứng dụng hiện nay, nên giữ Unicode.

## <span id="app-config">Cấu hình theo ứng dụng</span>

Bạn có thể đặt kiểu gõ, bảng mã và cách gửi riêng cho từng file `.exe`. VKey áp dụng cấu hình khi cửa sổ tương ứng được chọn.

| Cách gửi | Khi nên dùng |
|---|---|
| Mặc định | Ứng dụng Win32 thông thường |
| Clipboard | Ứng dụng không tương thích với cách gửi phím mặc định |
| Firefox hoặc Cloud/Remote | Trình duyệt, máy ảo hoặc ứng dụng điều khiển từ xa tương ứng |
| Chế độ game | Game cần nhận nguyên trạng các phím di chuyển |

> Khi dùng cách gửi Clipboard, dữ liệu clipboard không phải văn bản như hình ảnh có thể bị ảnh hưởng. Hãy sao lưu nội dung clipboard quan trọng trước khi thử.

## <span id="switching">Chuyển chế độ Việt và Anh</span>

- **Lưu chế độ theo ứng dụng:** ghi nhớ trạng thái `V` hoặc `E` của từng ứng dụng.
- **Khoá `E`:** luôn dùng tiếng Anh và chặn phím tắt chuyển chế độ trong ứng dụng đã chọn.
- **Khoá `V`:** luôn bật tiếng Việt trong ứng dụng đã chọn.
- **Tự tắt khi bàn phím CJK:** chuyển sang `E` khi Windows dùng bố cục Trung, Nhật hoặc Hàn, sau đó bật lại khi trở về bố cục US.

Khoá chế độ theo ứng dụng áp dụng chủ yếu cho hook engine. Ứng dụng đang dùng TSF có thể có hành vi khác.

## <span id="browser-extension">Đổi chế độ theo website bằng extension (thử nghiệm)</span>

[VKey Browser](https://github.com/phatMT97/VKey-Browser) cho phép mỗi website dùng một chế độ riêng. Extension chỉ gửi hostname và chế độ đã chọn đến `VKeyBrowserHost` trên máy; không đọc hoặc gửi nội dung bạn nhập.

### Chuẩn bị

- Dùng bản VKey có `VKeyBrowserHost.exe` nằm cùng thư mục với `VKey.exe` hoặc
  `VKeyClassic.exe`.
- Chạy VKey ít nhất một lần để đăng ký Native Messaging Host cho trình duyệt.
- Tải hoặc clone [repo VKey-Browser](https://github.com/phatMT97/VKey-Browser).

### Cài trên Chrome, Edge hoặc Brave

1. Mở trang quản lý extension: `chrome://extensions`, `edge://extensions` hoặc `brave://extensions`.
2. Bật **Developer mode**.
3. Chọn **Load unpacked** và mở thư mục đã tải của VKey-Browser.
4. Ghim biểu tượng VKey Browser để đổi chế độ nhanh cho website hiện tại.

### Cài tạm trên Firefox

1. Chạy `npm run build:firefox` trong thư mục VKey-Browser.
2. Mở `about:debugging#/runtime/this-firefox`.
3. Chọn **Load Temporary Add-on**.
4. Chọn file `dist/firefox/manifest.json`.

Thư mục gốc là gói Chromium; không chọn `manifest.json` ở đó cho Firefox.

Firefox sẽ gỡ extension tạm khi đóng trình duyệt; đây là cách thử nghiệm dành cho nhà phát triển.

### Thiết lập và chuyển tab

Mở website, nhấn biểu tượng extension rồi chọn:

- **Default:** để VKey tự quyết định, không ép chế độ V hay E.
- **English (E):** luôn dùng tiếng Anh trên hostname này.
- **TSF:** yêu cầu VKey dùng TSF cho website này khi trình duyệt hỗ trợ.

Để có Google dùng V và GitHub dùng E, trước tiên giữ trạng thái VKey gốc ở V, đặt `google.com` là **Default** và `github.com` là **English (E)**. Khi chuyển tab từ Google sang GitHub, extension gửi quy tắc của tab đang hoạt động và chế độ hiệu lực tự đổi từ V sang E; chuyển lại Google sẽ trở về V. **Default** không ép V: nếu trạng thái VKey gốc là E thì Google vẫn dùng E.

Công tắc **Bật điều hướng theo website** được bật mặc định. Tắt công tắc để tạm ngừng áp dụng mọi rule mà không xóa cấu hình; bật lại thì các rule đã lưu có hiệu lực ngay.

Popup hiển thị **Đã kết nối VKey** khi native host hoạt động. Nếu thấy **Chưa kết nối VKeyBrowserHost**, hãy kiểm tra bản VKey đang dùng có `VKeyBrowserHost.exe`, thoát/mở lại VKey để đăng ký host, sau đó khởi động lại trình duyệt và reload extension.

> Đây là tính năng thử nghiệm. Thanh địa chỉ và các trang nội bộ như `chrome://` hoặc `about:` không cung cấp hostname trang web cho extension nên tiếp tục dùng trạng thái hiện tại của VKey. Xem thêm [tài liệu kỹ thuật và xử lý sự cố](https://github.com/phatMT97/VKey/blob/master/docs/BROWSER_EXTENSION.md).

## <span id="spellcheck">Chính tả, gõ tự do và khôi phục từ</span>

- **Kiểm tra chính tả:** giảm việc đặt dấu nhầm vào chuỗi không giống âm tiết tiếng Việt.
- **Gõ tự do:** bỏ qua kiểm tra chính tả khi viết mã, tên riêng hoặc chuỗi đặc biệt.
- **Khôi phục từ gốc:** trả lại các phím ban đầu khi VKey nhận diện sai một từ.
- **Danh sách loại trừ:** giữ nguyên thuật ngữ, từ viết tắt hoặc chuỗi riêng của người dùng.
- **Viết hoa đầu câu:** hoạt động theo ngữ cảnh; TSF có thể cung cấp ngữ cảnh tốt hơn hook engine.

Engine C++20 có sẵn đáp ứng các chức năng gõ thông thường. Engine Rust cho kiểm tra chính tả nâng cao là tùy chọn và mặc định tắt.

## <span id="hotkeys">Quản lý phím tắt</span>

Trong mục quản lý phím tắt, bạn có thể gán tổ hợp cho các thao tác thường dùng:

- Chuyển giữa `V` và `E`.
- Khôi phục từ gốc.
- Tạm bỏ qua macro.
- Chuyển mã phần văn bản đang chọn.
- Bật hoặc tắt chế độ game cho ứng dụng đang mở.

Chế độ game không có phím tắt mặc định để tránh trùng với phím đã dùng trong game.

## <span id="tsf-mode">Sử dụng Windows TSF</span>

VKey hỗ trợ Text Services Framework theo hai cách:

- **Tăng cường ngữ cảnh:** hook vẫn là cách nhập chính, TSF hỗ trợ đọc ngữ cảnh để xử lý dấu và viết hoa.
- **TSF làm phương thức nhập chính:** áp dụng cho các ứng dụng được thêm vào danh sách TSF. Cách này có thể phù hợp hơn với Office, ứng dụng Windows Store và một số ô nhập đặc thù.

Khi TSF là phương thức nhập chính, VKey yêu cầu Windows hiển thị phần chữ đang được soạn mà không gạch chân. Một số ứng dụng có thể tự vẽ kiểu composition riêng; nếu vẫn thấy gạch chân, hãy ghi rõ ứng dụng và phiên bản Windows khi báo lỗi.

## <span id="macro">Gõ tắt và macro</span>

Macro thay một chuỗi ngắn bằng nội dung dài hơn. Nội dung có thể có xuống dòng và dài tới 20.000 ký tự.

- Chọn phím kích hoạt như `Space`, `Enter` hoặc `Tab`.
- Có thể dùng macro trong chế độ tiếng Anh nếu tùy chọn tương ứng được bật.
- Kiểu viết hoa của kết quả có thể theo cách viết của từ kích hoạt.

Ví dụ: cấu hình `dc` thành một địa chỉ đầy đủ, sau đó gõ `dc` và phím kích hoạt để chèn nội dung.

## <span id="convert-tool">Chuyển mã và biến đổi chữ</span>

Công cụ chuyển mã làm việc trên phần văn bản đang chọn. Các thao tác gồm:

- Chuyển giữa Unicode, TCVN3, VNI Windows, Unicode Compound và Vietnamese Locale.
- Chuyển HOA, chuyển thường, viết hoa đầu câu hoặc bỏ dấu.
- Tự động dán kết quả và chọn lại phần văn bản vừa thay đổi.
- Chuyển tuần tự qua nhiều phép biến đổi bằng cùng một phím tắt.

Trước khi dùng trên tài liệu quan trọng, nên thử với một đoạn văn bản ngắn để kiểm tra ứng dụng đích có giữ nguyên lựa chọn hay không.

## <span id="game-mode">Cấu hình cho game</span>

Chế độ game gửi lại phím gốc để game vẫn nhận `W`, `A`, `S`, `D` khi Telex xử lý dấu.

Bạn có thể bật theo hai cách:

1. Thêm file `.exe` của game trong **Cấu hình từng ứng dụng** và chọn **Chế độ game**.
2. Gán phím tắt **Bật / tắt chế độ game cho app đang mở**, sau đó nhấn ngay trong game.

Nếu game chạy bằng quyền Administrator, Windows có thể chặn VKey đang chạy với quyền thường. Chỉ chạy VKey bằng quyền Administrator khi ứng dụng đích thực sự yêu cầu.

## <span id="startup">Khởi động cùng Windows và watchdog</span>

VKey đăng ký autostart theo một trong hai cơ chế:

- Chế độ thường dùng Registry của tài khoản hiện tại.
- Chế độ chạy với quyền Administrator dùng Task Scheduler.

Sau khi cập nhật hoặc di chuyển thư mục VKey, hãy tắt rồi bật lại **Khởi động cùng Windows** để ghi đường dẫn mới. Nếu autostart vẫn lỗi, tắt VKey và làm theo [hướng dẫn gỡ cấu hình autostart cũ](https://github.com/phatMT97/VKey/blob/master/docs/uninstall-autostart.md), sau đó mở VKey và bật lại.

Watchdog là tùy chọn riêng, mặc định tắt. Khi được bật, chương trình giám sát có thể khởi động lại VKey sau khi ứng dụng ngừng phản hồi hoặc thoát bất thường. Thoát VKey theo cách thông thường sẽ không kích hoạt khởi động lại.

## <span id="troubleshooting">Xử lý sự cố và bảo mật</span>

### VKey không đặt dấu trong một ứng dụng

1. Kiểm tra VKey đang ở chế độ `V`.
2. Tắt các bộ gõ khác.
3. Tạo cấu hình riêng cho ứng dụng và thử cách gửi phù hợp.
4. Nếu ứng dụng chạy bằng quyền Administrator, kiểm tra mức quyền của VKey.
5. Thử TSF nếu ô nhập không tương thích với hook engine.

### Windows hoặc phần mềm diệt virus cảnh báo

Chỉ tải VKey từ GitHub Releases chính thức. Trước khi tạo ngoại lệ, hãy xác minh bản tải theo [hướng dẫn antivirus và Sigstore](https://github.com/phatMT97/VKey/blob/master/docs/ANTIVIRUS.md). Trạng thái ký số có thể khác theo từng phiên bản.

### Debug Log

Debug Log có thể ghi lại thao tác bàn phím để chẩn đoán lỗi. File log có thể chứa mật khẩu hoặc dữ liệu nhạy cảm.

Trước khi gửi log:

1. Mở file và đọc lại nội dung.
2. Xóa các dòng không liên quan.
3. Chỉ gửi đoạn cần thiết để tái hiện lỗi.

Đọc thêm [tài liệu bảo mật](https://github.com/phatMT97/VKey/blob/master/docs/SECURITY.md) và [GUIDE.md gốc trên GitHub](https://github.com/phatMT97/VKey/blob/master/docs/GUIDE.md).
