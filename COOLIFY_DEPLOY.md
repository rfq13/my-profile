
# Deploy ke Coolify

## Langkah-langkah Deployment

### 1. Persiapan Repository
- Pastikan repository Anda sudah terhubung ke Git provider (GitHub, GitLab, atau Bitbucket)
- Commit semua perubahan dan push ke branch utama

### 2. Setup di Coolify Dashboard

1. **Login ke Coolify Dashboard**
   - Akses dashboard Coolify Anda
   - Login dengan kredensial admin

2. **Buat Project Baru**
   - Klik "New Project" atau "Create Application"
   - Pilih "Static Site" atau "Node.js Application"

3. **Konfigurasi Repository**
   - Pilih Git provider Anda
   - Pilih repository ini
   - Set branch yang akan di-deploy (biasanya `main` atau `master`)

### 3. Konfigurasi Build Settings

```
Build Command: npm run build
Output Directory: dist
Node Version: 18.x
Port: 3000
```

### 4. Environment Variables (Optional)
Jika diperlukan, tambahkan environment variables:
```
NODE_ENV=production
```

### 5. Deploy Settings
- **Deploy Branch**: main/master
- **Auto Deploy**: Enable (agar otomatis deploy saat ada push)
- **Build Cache**: Enable (untuk mempercepat build)

### 6. Domain Settings
- Gunakan domain default yang disediakan Coolify
- Atau konfigurasi custom domain jika diperlukan

## Perintah Build yang Digunakan

Coolify akan menjalankan perintah berikut secara otomatis:

```bash
# Install dependencies
npm ci

# Build aplikasi
npm run build

# Serve aplikasi (menggunakan serve package)
npx serve -s dist -l 3000
```

## Troubleshooting

### Build Gagal
- Pastikan `package.json` dan `package-lock.json` ada di root repository
- Cek log build di dashboard Coolify untuk error details

### Aplikasi Tidak Load
- Pastikan port 3000 terkonfigurasi dengan benar
- Cek health check endpoint di dashboard

### Auto Deploy Tidak Berfungsi
- Pastikan webhook terkonfigurasi dengan benar di Git provider
- Cek webhook logs di dashboard Coolify

## Fitur Tambahan

### SSL Certificate
- Coolify otomatis menyediakan SSL certificate via Let's Encrypt
- Pastikan domain sudah pointing ke server Coolify

### Monitoring
- Monitor resource usage di dashboard
- Set up alerts jika diperlukan

### Backup
- Enable backup otomatis jika tersedia
- Backup dapat dilakukan manual dari dashboard

## Catatan Penting

1. **Resource Requirements**: Aplikasi ini ringan dan tidak membutuhkan resource besar
2. **Build Time**: Build biasanya selesai dalam 2-3 menit
3. **Update**: Setiap push ke branch utama akan trigger deployment otomatis
4. **Rollback**: Coolify menyediakan fitur rollback ke deployment sebelumnya
