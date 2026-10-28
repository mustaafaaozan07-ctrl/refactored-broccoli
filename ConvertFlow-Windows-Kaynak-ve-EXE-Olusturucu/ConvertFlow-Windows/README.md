# ConvertFlow Windows

Bu proje mevcut ConvertFlow v2 web arayuzunu Windows masaustu uygulamasina paketler.

## Kurulum EXE dosyasini GitHub uzerinde olusturmak
1. GitHub'da yeni bir **private** repository olusturun.
2. Bu ZIP'i acin ve icindeki **tum dosya ve klasorleri** repository'nin kokune yukleyin (web ve .github dahil).
3. GitHub > Actions > **Windows kurulum dosyasi** > **Run workflow** secin. `main` dalina yukleme de otomatik derlemeyi baslatabilir.
4. Islem basarili olunca Actions > ilgili calisma > Artifacts > **ConvertFlow-Windows-Kurulum** dosyasini indirin.
5. Artifact ZIP'ini acin; icindeki **ConvertFlow-Setup-2.0.0.exe** dosyasini arkadaslariniza gonderebilirsiniz.

## Yerelde derleme
Node.js kurulu Windows bilgisayarda: `npm install` sonra `npm run build:win`. EXE `release` klasorune gelir.

## Notlar
- Bu kaynak proje ZIP'i, **EXE degildir**. EXE'nin Windows ortaminda derlenmesi gerekir.
- Uygulama Electron kullanir. Kaynak HTML, CSS ve JS web/ klasorundedir.
- Mevcut web uygulamasi PDF kutuphanelerini CDN'den ceker; bu nedenle PDF islemleri icin internet gerekebilir.
- Uygulama kod imzali degildir. Windows SmartScreen guvenlik uyarisina neden olabilir.
- Ilk kurulum paketinin gercek Windows bilgisayarda test edilmesi gerekir.
