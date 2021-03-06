import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/modern-site.module.css';

const modern = () => {
  return (
    <div>
      <Head>
        <title>inweblife - SEO оптимизация</title>
        <meta name="description" content="inweblife - Вашият живот в мрежата" />
        <meta name="keywords" content="Модерен SEO оптимизиран сайт" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <div className={styles.container}>
        <div className={styles.picture}>
          <Image src="/desk.jpg" alt="workspace" width={780} height={500} />
        </div>

        <h1 className={styles.heading}>
          Как се създава модерен SEO адаптивен сайт
        </h1>

        <div className={styles.text}>
          <p className={styles.paragraph}>
            С прогреса на технологиите в последните години, развитието на
            интернет, мобилните устройства, социалните мрежи и последствията от
            социалното дистанциране, все по-голяма става нуждата от онлайн
            магазини, услуги онлайн, всичко онлайн. Докато стоят по домовете си,
            дори докато работят от вкъщи, все повече хора нямат възможности и
            желание да излизат навън, за да купят нещо, да преживеят нещо
            вълнуващо, защото в интернет има всичко. А, както знаем – търсенето
            определя предлагането. Хората търсят онлайн, а не по главната
            търговска улица, както беше до неотдавна.
          </p>

          <p className={styles.paragraph}>
            Това налага на търговците, на хората, които искат да пласират
            услугите и стоката си, да влязат в интернет, където да потърсят своя
            успех. Все повече хора затварят локалните си магазини, офисите си и
            създават такива онлайн – правят се сайтове, Facebook страници,
            рекламира се в социалните мрежи, в Google и др.
          </p>

          <p className={styles.paragraph}>
            За да живее един съвременен бизнес, той има нужда от сайт, Facebook
            страница, Google My Business, реклама и SEO оптимизация на сайта за
            по-високо индексиране в търсачките. Не е важно един сайт само да
            бъде изграден, да се качи на хост и да бъде пуснат. Сайтът трябва да
            се изгради по всички SEO стандарти още отначало.
          </p>
          <p className={styles.paragraph}>
            Още в началото, преди да почне да се изгражда сайта, трябва да се
            съобразят – скорост, мобилен дизайн и потребителско изживяване.
            Много често собственикът на сайта иска сайтът му да изглежда по един
            начин, който е в пълно противоречие с правилата, по които се
            изграждат SEO връзките, семантиката и всички останали тънкости,
            които издигат съдържанието най-напред в търсачките. Това е напълно
            нормално – не му е работа да знае тези неща. Работа на разработчика
            е да ги обясни убедително, така че собственикът да разбере, кое е
            най-важното, на кое трябва да държи, да заложи и как точно това ще
            работи за него, ще му се отплаща с поръчки и клиенти в бъдеще.
          </p>
          <p className={styles.paragraph}>
            На 21 Април 2015 година Google официално обяви, че занапред ще дава
            предимство за по-високо класиране в търсачките на сайтовете с
            адаптивен дизайн или казано на професионален език - създадени по
            стандартите Mobile First. Това, което търсачката реално прави е да
            разграничава резултатите от търсенията направени от настолен
            компютър или мобилно устройство.
          </p>
          <p className={styles.paragraph}>
            От 2018 година - насам системата на Google обръща голямо внимание на
            големината на файловете в сайта и скоростта на тяхното зареждане, с
            идеята, че потребителите искат максимално бързо да получат
            информацията, която търсят. Така, по-бързите сайтове започват да се
            класират на предни позиции при изобразяване на резултатите от
            търсенето, което прави оптимизацията за скорост една от най-важните.
          </p>
          <p className={styles.paragraph}>
            Тези изисквания трябва да бъдат взимани предвид още преди да почне
            да се изгражда един сайт, за да може, когато дойде време да се
            настройват другите фактори, които касаят индексирането в търсачките,
            всички те комплексно да дигнат сайта възможно най-горе и по-късно,
            когато почнат рекламните активности, успехите да идват с по-малко
            разходи.
          </p>
        </div>
      </div>
      <div className={styles.next}>
      <Link href="/seo-fashion">
        <a className={styles.next}>Ерата на смартфоните</a>
      </Link>
      <Link href="/powerful-site">
        <a className={styles.next}>Създайте мощен сайт</a>
      </Link>
      </div>
    </div>
  );
};

export default modern;
