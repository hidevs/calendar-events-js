## Usage
```ts

const cal = new Calendar({ year: 1402, month: 2, day: 2 })
const cal = new Calendar('1402/02/02')

const cal = new Calendar({ year: 1402, month: 2 })
const cal = new Calendar('1402-2', '-')

await cal.isHoliday(): boolean;
await cal.events(): DayEvent[];

// events() method return data
[
  {
    date: { year: 1402, month: 2, day: 1 },
    description: 'روز بزرگداشت سعدی',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 2 },
    description: 'جشن گیاه آوری؛ روز زمین',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 2 },
    description: 'عید سعید فطر',
    is_holiday: true
  },
  {
    date: { year: 1402, month: 2, day: 3 },
    description: 'روزبزرگداشت شیخ بهایی؛ روزملی کارآفرینی؛ روز معماری',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 3 },
    description: 'تعطیل به مناسبت عید سعید فطر',
    is_holiday: true
  },
  {
    date: { year: 1402, month: 2, day: 7 },
    description: 'روز جهانی طراحی و گرافیک',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 9 },
    description: 'روز ملی روانشناس و مشاور',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 10 },
    description: 'جشن چهلم نوروز؛ روز ملی خلیج فارس',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 11 },
    description: 'روزجهانی  کارگر',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 12 },
    description: 'روز معلم',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 15 },
    description: 'جشن میانه بهار/جشن بهاربد؛ روز شیراز',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 15 },
    description: 'روز جهانی ماما',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 18 },
    description: 'روز جهانی صلیب سرخ و هلال احمر',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 22 },
    description: 'زادروز مریم میرزاخانی ریاضیدان ایرانی، روز جهانی زن در ریاضیات',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 25 },
    description: 'روز بزرگداشت فردوسی',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 26 },
    description: 'شهادت امام جعفر صادق علیه السلام',
    is_holiday: true
  },
  {
    date: { year: 1402, month: 2, day: 27 },
    description: 'روز ارتباطات و روابط عمومی',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 28 },
    description: 'روز بزرگداشت حکیم عمر خیام',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 28 },
    description: 'روز جهانی موزه و میراث فرهنگی',
    is_holiday: false
  },
  {
    date: { year: 1402, month: 2, day: 31 },
    description: 'ولادت حضرت معصومه سلام الله علیها و روز دختران',
    is_holiday: false
  }
]

```

## Methods
```ts

```