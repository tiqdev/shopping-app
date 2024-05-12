# Eteration Frontend Case Study

Merhaba! Ben Tarık Kaya.
Bu projede önemli olan birkaç teknolojiyi kullanarak bir e-ticaret uygulaması geliştirdim. İşte bazı detaylar ve notlar:

- **React.js ve TypeScript:** Proje, React.js kütüphanesi ve TypeScript ile geliştirildi. TypeScript, güçlü bir tip kontrolü sağlayarak kodun daha güvenli ve anlaşılır olmasına yardımcı oldu.
- **Vite:** Proje, Vite ile başlatıldı. Vite, hızlı bir geliştirme sunan ve hızlı bir şekilde yeniden derleme sağlayan bir araçtır.
- **Redux Toolkit:** Redux Toolkit, global durum yönetimi için kullanıldı. Redux Toolkit, Redux'u daha kolay ve verimli bir şekilde kullanmamızı sağladı.
- **React Router DOM:** Sayfa yönlendirme ve navigasyon için React Router DOM kullanıldı. Bu, kullanıcıların uygulama içinde gezinmesini sağladı.
- **Axios:** HTTP istekleri yapmak için Axios kullanıldı. Axios, isteklerin kolayca yapılmasını ve yanıtların işlenmesini sağladı.
- **Tailwind CSS:** Proje, hızlı ve kolay bir şekilde stil oluşturmak için Tailwind CSS ile tasarlandı. Tailwind, bileşenlerin ve stillerin hızlı bir şekilde geliştirilmesine yardımcı oldu.
- **Testing Library ve Vitest:** Birim testleri yazmak için Testing Library ve Vitest kullanılmıştır. Testing Library, kullanıcı davranışlarını simüle etmek ve bileşenlerin doğru çalıştığını doğrulamak için kullanılırken, Vitest ise test koşullarını tanımlamak ve test sonuçlarını değerlendirmek için kullanılmıştır.
- **Sepet Yönetimi:** Sepet durumu, Redux kullanılarak yönetildi. Herhangi bir ürünün sepete eklenmesi veya çıkarılması durumunda, sepetteki ürün sayısı ve toplam fiyat güncellendi.
- **Filtreleme ve Arama:** Ürünlerin sol tarafında bulunan filtreler ve üst kısımdaki arama çubuğu, ürünlerin filtrelenmesini ve aranmasını sağladı.

## Filtreleme ve Arama:

Filtreleme ve arama işlemleri, istemci tarafında gerçekleştirildi. Bunun nedeni, veri setinin büyük olmaması ve /products dışında bir API uç noktasına sahip olmamamızdır. API desteği arttırılıp daha kapsamlı bir dökümantasyon sunulursa eğer, filtreleme ve arama işlemlerini sunucu tarafında gerçekleştirmek daha uygun olabilir.

## Proje Kurulumu

1. Projeyi klonlayın: `git clone https://github.com/tiqdev/shopping-app.git`
2. Proje dizinine gidin: `cd shopping-app`
3. Gerekli bağımlılıkları yükleyin: `npm install`
4. Projeyi başlatın: `npm run dev`
5. Tarayıcınızda http://localhost:5173 adresine gidin.
