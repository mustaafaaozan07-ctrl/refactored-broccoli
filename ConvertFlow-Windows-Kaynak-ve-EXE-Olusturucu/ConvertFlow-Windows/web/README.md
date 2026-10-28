# ConvertFlow v2

Statik web uygulaması. Netlify Drop'a ZIP'i yükleyerek mevcut siteyi güncelleyin.

## Yeni formatlar
- Giriş: JPG/JPEG, PNG, WEBP, BMP, GIF (ilk kare), SVG (görsele rasterleştirilir)
- Görsel çıkış: JPG, PNG, WEBP, BMP
- Görsel -> PDF: yukarıdaki giriş biçimleri
- PDF -> Görsel: PNG, JPG, WEBP
- PDF -> TXT: seçilebilir metin (OCR değildir)

## Önemli sınırlar
- Animasyonlu GIF'in sadece ilk karesi dönüştürülür.
- SVG -> PNG/JPG/WEBP/BMP vektör yapıyı korumaz.
- Tarayıcıların SVG ve BMP çözme desteği farklılık gösterebilir.
- DOCX, XLSX, PPTX ve HEIC bu sürümde desteklenmez.
- PDF özellikleri için internetten pdf.js / jsPDF, çoklu indirmede JSZip gerekir.
- Dosyalar kullanıcı tarayıcısında işlenir, sunucuya gönderilmez.
- Çok büyük dosyalar bellek sınırına takılabilir.
