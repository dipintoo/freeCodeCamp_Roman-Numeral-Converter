// STEP //

// 1. Ubah tabel menjadi Array of Object, lalu isi pasangan property dengan value (Roman numeral dengan Arabic numeral) untuk setiap object di dalam Array

// 2. Siapkan Array kosong untuk menampung hasil kombinasi simbol romawi

// 3. Aturan Cara Menulis Angka Romawi

// a. Bilangan yang diberikan dipecah menjadi bentuk    yang paling kecil
// b. Tulis huruf Romawi masing-masing dan tambahkan/kurangi, contoh: Angka romawi 65 dapat ditulis sebagai

// 65 = 50 + 10 + 5 = L + X + V = LXV

// Dari aturan penulisan di atas, idenya kita bisa melakukan while loop dengan mengecek setiap input number apakah >= value dalam object. Ketika iya, kita pecah input number dengan menguranginya dengan value lalu menambahkan simbol romawi yang sesuai ke dalam array kosong yang sudah disiapkan tadi. Proses ini akan terus berulang sampai sisa pengurangan bernilai nol dan kita keluar dari while loop.

// Misal input numbernya 65.

// Cek value yang cocok. Ternyata 50 dengan simbol "L" cocok karena memenuhi kondisi 65 >= 50, lalu kita pecah dengan mengurangi 65 dengan 50 yang bersisa 15. Tambahkan simbol "L" ke dalam array --> [L]

// Karena masih ada sisa, cek lagi value mana lagi cocok. Oh ternyata masih ada 10 dengan simbol "X". Karena 15 >= 10 kita pecah lagi 15 - 10 = 5. Tambahkan simbol "X" ke dalam array --> [LX]

// Masih Sisa 5. Terdapat value 5 dengan simbol "V". Karena 5 >= 5 kita pecah lagi 5 - 5 = 0. Tambahkan simbol "V" ke dalam array --> [LXV]. Karena sudah tidak ada sisa, kita keluar dari while loop.

// 4. Return hasil

const romanArabic = [
	{ arabicValue: 1000, romanSymbol: "M" },
	{ arabicValue: 900, romanSymbol: "CM" },
	{ arabicValue: 500, romanSymbol: "D" },
	{ arabicValue: 400, romanSymbol: "CD" },
	{ arabicValue: 100, romanSymbol: "C" },
	{ arabicValue: 90, romanSymbol: "XC" },
	{ arabicValue: 50, romanSymbol: "L" },
	{ arabicValue: 40, romanSymbol: "XL" },
	{ arabicValue: 10, romanSymbol: "X" },
	{ arabicValue: 9, romanSymbol: "IX" },
	{ arabicValue: 5, romanSymbol: "V" },
	{ arabicValue: 4, romanSymbol: "IV" },
	{ arabicValue: 1, romanSymbol: "I" }
];

function convertToRoman(num) {
	const result = [];

	romanArabic.forEach((obj) => {
		while (num >= obj.arabicValue) {
			num = num - obj.arabicValue;
			result.push(obj.romanSymbol);
		}
	});

	// console.log(result)

	return result.join("");
}

console.log(convertToRoman(65)); // Output: LXV