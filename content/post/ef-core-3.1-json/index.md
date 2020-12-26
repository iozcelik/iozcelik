---
title : "EF Core 3.1 ile MSSQL veritabanında JSON kolonları kullanmak ve sorgulamak"
description : "MSSQL 2016 ile desteklenmeye başlayan JSON kolonlar çok faydalı olmasına rağmen şu anda Entity Framework Core üzerinden sorgulanamıyor durumda.

Bu durum ise bir çok yazılımcı için bu kolonları nasıl saklayacağı ve sorgulayacağı gibi soruları akıllara getirmektedir.

EF Core kullanmaya başladıktan sonra kendimi tekrar etmemek adına yazdığım kodları paket haline getirip, NUGET paket yöneticisine yükledim."
date : 2020-07-15
slug: ef-core-3-1-ile-mssql-veritabaninda-json-kolonlari-kullanmak-ve-sorgulamak
categories:
    - Yazilim
tags :
    - ef-core
    - json
---

MSSQL 2016 ile desteklenmeye başlayan JSON kolonlar çok faydalı olmasına rağmen şu anda Entity Framework Core üzerinden sorgulanamıyor durumda.

Bu durum ise bir çok yazılımcı için bu kolonları nasıl saklayacağı ve sorgulayacağı gibi soruları akıllara getirmektedir.

EF Core kullanmaya başladıktan sonra kendimi tekrar etmemek adına yazdığım kodları paket haline getirip, NUGET paket yöneticisine yükledim. ([GitHub](https://github.com/iozcelik/EntityFrameworkCore.SqlServer.JsonExtention) | [Nuget](https://www.nuget.org/packages/EntityFrameworkCore.SqlServer.JsonExtention/1.0.0))

Paketin kullanımı kolay, EF Core tarafından desteklenen diğer DBFunction kullanım şekliyle aynı.

Paketi Nuget üzerinden yüklemek için “Packet Manager Console” üzerinden aşağıdaki komutu çalıştırmamız gerekiyor.

```console
PM> Install-Package EntityFrameworkCore.SqlServer.JsonExtention -Version 1.0.0
```

Paket projemize dahil olduktan sonra ise DbContext class’ında bulunan OnConfiguring metodunu override ediyoruz ve bu pakete ekliyoruz.

```csharp
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
    base.OnConfiguring(optionsBuilder);
    optionsBuilder.UseJsonFunctions();
}
```

Artık Json fonksiyonlarını projemizde kullanabiliriz.

Peki bir kolonun Json olduğunu nasıl belirteceğiz? Onun içinde model builder da ilgili kolon için `.HasJsonConversion` metodunu kullanacağız. Örneğin;

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder) {
    modelBuilder.Entity<Customer>().Property(p => p.Company).HasJsonConversion();
    modelBuilder.Entity<Customer>().Property(p => p.ContactDetail).HasJsonConversion();
    modelBuilder.Entity<Customer>().Property(p => p.LuckyNumbers).HasJsonConversion();
    modelBuilder.Entity<Customer>().Property(p => p.MenuItems).HasJsonConversion();
}
```

Son olarak ise nasıl sorgulayacağımıza bakalım;

```csharp
var phones = _context.Customers.Where(w => EF.Functions.JsonValue(w.ContactDetail, "Phone") != null)
        .OrderByDescending(o => EF.Functions.JsonValue(o.ContactDetail, "Phone"))
        .Select(s => EF.Functions.JsonValue(s.ContactDetail, "Phone"))
        .ToList();
```

Evet, tüm kullanım bu şekilde. Umarım Entity Framework doğal Json desteğini ekleyene kadar herkese faydalı olur.