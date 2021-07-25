import { MigrationInterface, QueryRunner } from 'typeorm';

export class LanguagesMigration1627223004686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`insert into public.languages ("name") values ('Afrikaans');
        insert into public.languages ("name") values ('Albanian');
        insert into public.languages ("name") values ('Amharic');
        insert into public.languages ("name") values ('Arabic');
        insert into public.languages ("name") values ('Armenian');
        insert into public.languages ("name") values ('Assamese');
        insert into public.languages ("name") values ('Aymara');
        insert into public.languages ("name") values ('Azeri');
        insert into public.languages ("name") values ('Belarusian');
        insert into public.languages ("name") values ('Bengali');
        insert into public.languages ("name") values ('Bislama');
        insert into public.languages ("name") values ('Bosnian');
        insert into public.languages ("name") values ('Bulgarian');
        insert into public.languages ("name") values ('Burmese');
        insert into public.languages ("name") values ('Catalan');
        insert into public.languages ("name") values ('Chinese');
        insert into public.languages ("name") values ('Croatian');
        insert into public.languages ("name") values ('Czech');
        insert into public.languages ("name") values ('Danish');
        insert into public.languages ("name") values ('Dari');
        insert into public.languages ("name") values ('Dhivehi');
        insert into public.languages ("name") values ('Dutch');
        insert into public.languages ("name") values ('Dzongkha');
        insert into public.languages ("name") values ('English');
        insert into public.languages ("name") values ('Estonian');
        insert into public.languages ("name") values ('Fijian');
        insert into public.languages ("name") values ('Filipino');
        insert into public.languages ("name") values ('Finnish');
        insert into public.languages ("name") values ('French');
        insert into public.languages ("name") values ('Gagauz');
        insert into public.languages ("name") values ('Georgian');
        insert into public.languages ("name") values ('German');
        insert into public.languages ("name") values ('Greek');
        insert into public.languages ("name") values ('Guaraní');
        insert into public.languages ("name") values ('Gujarati');
        insert into public.languages ("name") values ('Haitian Creole');
        insert into public.languages ("name") values ('Hebrew');
        insert into public.languages ("name") values ('Hindi');
        insert into public.languages ("name") values ('Hiri Motu');
        insert into public.languages ("name") values ('Hungarian');
        insert into public.languages ("name") values ('Icelandic');
        insert into public.languages ("name") values ('Indonesian');
        insert into public.languages ("name") values ('Irish Gaelic');
        insert into public.languages ("name") values ('Italian');
        insert into public.languages ("name") values ('Japanese');
        insert into public.languages ("name") values ('Kannada');
        insert into public.languages ("name") values ('Kashmiri');
        insert into public.languages ("name") values ('Kazakh');
        insert into public.languages ("name") values ('Khmer');
        insert into public.languages ("name") values ('Korean');
        insert into public.languages ("name") values ('Kurdish');
        insert into public.languages ("name") values ('Kyrgyz');
        insert into public.languages ("name") values ('Lao');
        insert into public.languages ("name") values ('Latvian');
        insert into public.languages ("name") values ('Lithuanian');
        insert into public.languages ("name") values ('Luxembourgish');
        insert into public.languages ("name") values ('Macedonian');
        insert into public.languages ("name") values ('Malagasy');
        insert into public.languages ("name") values ('Malay');
        insert into public.languages ("name") values ('Malayalam');
        insert into public.languages ("name") values ('Maltese');
        insert into public.languages ("name") values ('Marathi');
        insert into public.languages ("name") values ('Moldovan');
        insert into public.languages ("name") values ('Mongolian');
        insert into public.languages ("name") values ('Montenegrin');
        insert into public.languages ("name") values ('Māori');
        insert into public.languages ("name") values ('Ndebele');
        insert into public.languages ("name") values ('Nepali');
        insert into public.languages ("name") values ('New Zealand Sign Language');
        insert into public.languages ("name") values ('Northern Sotho');
        insert into public.languages ("name") values ('Norwegian');
        insert into public.languages ("name") values ('Oriya');
        insert into public.languages ("name") values ('Papiamento');
        insert into public.languages ("name") values ('Pashto');
        insert into public.languages ("name") values ('Persian');
        insert into public.languages ("name") values ('Polish');
        insert into public.languages ("name") values ('Portuguese');
        insert into public.languages ("name") values ('Punjabi');
        insert into public.languages ("name") values ('Quechua');
        insert into public.languages ("name") values ('Romanian');
        insert into public.languages ("name") values ('Somali');
        insert into public.languages ("name") values ('Sotho');
        insert into public.languages ("name") values ('Spanish');
        insert into public.languages ("name") values ('Swahili');
        insert into public.languages ("name") values ('Swati');
        insert into public.languages ("name") values ('Swedish');
        insert into public.languages ("name") values ('Tajik');
        insert into public.languages ("name") values ('Tamil');
        insert into public.languages ("name") values ('Telugu');
        insert into public.languages ("name") values ('Tetum');
        insert into public.languages ("name") values ('Thai');
        insert into public.languages ("name") values ('Tok Pisin');
        insert into public.languages ("name") values ('Tsonga');
        insert into public.languages ("name") values ('Tswana');
        insert into public.languages ("name") values ('West Frisian');
        insert into public.languages ("name") values ('Y"name"dish');
        insert into public.languages ("name") values ('Zulu');`);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
