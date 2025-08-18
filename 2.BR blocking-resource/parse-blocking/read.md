# Parse blocking
> Khi khởi tạo cây dom HTML, có những phần logic cần xử lý JS và việc xử lý JS ảnh hưởng tới cây DOM. => thẻ script JS ảnh  hưởng tới quá trình tạo cây DOM (parse HTML)

 VD1: Ta tiến hành tạo 1 file script.js timeout 3s. Sau đó paste link file này vào dòng 8 index.html
![alt text](image.png)

Theo dõi performance của browser
![alt text](image-1.png)

- JS cần mất 3s để compile. 
- Thanh màu xanh dương là thời gian để parse HTML từ dòng 0...6 => 1...7 trong file HTML.
![alt text](image-2.png)

Sau khi tải xong 3.02s, tiếp tục parse HTML từ dòng số 9.. đến hết

**Kết luận**: Script file ảnh hưởng tới quá trình gen ra cây DOM HTML

![alt text](image-3.png)

VD2: Lần này ta tạo 2 script link và style link. Trường hợp script file delay timeout 3s, như ở ví dụ 1 thì cây DOM HTML sẽ gen ra chậm hơn. Vậy quá trình tạo **Render tree** có bị ảnh hưởng không, và ảnh hưởng ra sao?
![alt text](image-4.png)

Theo dõi quá trình performance:

![alt text](image-5.png)

Ta thấy 2 file css và JS generate song song. 

Ở ví dụ này cho thấy file  CSS khi tải xong 1.03s thì khởi tạo liền 1 CSSDOM 
![alt text](image-7.png)

Trong khi đó JS vẫn tiếp tục download hết 3.02s.

![alt text](image-6.png)

Khi thực thi xong Script thì mới tiếp tục parse HTML còn lại

**Kết luận:** Sau khi load script xong, thì quá trình tạo ra render tree mới xảy ra.