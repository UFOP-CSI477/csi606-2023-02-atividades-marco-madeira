import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type BloodType = {
  type: string;
  factor: string;
};

type State = {
  name: string;
  acronym: string;
};

type City = {
  name: string;
  state_id: number;
};

type Person = {
  name: string;
  street: string;
  number: string;
  additional: string;
  rg: string;
  city_id: number;
  blood_type_id: number;
};

type DonationPoint = {
  name: string;
  street: string;
  number: string;
  additional: string;
  city_id: number;
};

type Donation = {
  person_id: number;
  donation_point_id: number;
};

async function seed() {
  try {
    await Promise.all(
      seedBloodType().map((bloodType) => {
        return db.bloodType.create({
          data: {
            type: bloodType.type,
            factor: bloodType.factor,
          },
        });
      })
    );

    await Promise.all(
      seedState().map((state) => {
        return db.state.create({
          data: {
            name: state.name,
            acronym: state.acronym,
          },
        });
      })
    );

    await Promise.all(
      seedCity().map((city) => {
        return db.city.create({
          data: {
            name: city.name,
            state_id: city.state_id,
          },
        });
      })
    );

    await Promise.all(
      seedPerson().map((person) => {
        return db.person.create({
          data: {
            name: person.name,
            street: person.street,
            number: person.number,
            additional: person.additional,
            rg: person.rg,
            city_id: person.city_id,
            blood_type_id: person.blood_type_id,
          },
        });
      })
    );

    await Promise.all(
      seedDonationPoint().map((donationPoint) => {
        return db.donationPoint.create({
          data: {
            name: donationPoint.name,
            street: donationPoint.street,
            number: donationPoint.number,
            additional: donationPoint.additional,
            city_id: donationPoint.city_id,
          },
        });
      })
    );

    await Promise.all(
      seedDonation().map((donation) => {
        return db.donation.create({
          data: {
            person_id: donation.person_id,
            donation_point_id: donation.donation_point_id,
          },
        });
      })
    );
  } catch (error) {
    console.log("Erro ao povoar banco!");
  } finally {
    db.$disconnect();
  }
}

function seedBloodType(): BloodType[] {
  return [
    { type: "A", factor: "positivo" },
    { type: "A", factor: "negativo" },
    { type: "B", factor: "positivo" },
    { type: "B", factor: "negativo" },
    { type: "AB", factor: "positivo" },
    { type: "AB", factor: "negativo" },
    { type: "O", factor: "positivo" },
    { type: "O", factor: "negativo" },
  ];
}

function seedState(): State[] {
  return [
    { name: "acre", acronym: "AC" },
    { name: "alagoas", acronym: "AL" },
    { name: "amapá", acronym: "AP" },
    { name: "amazonas", acronym: "AM" },
    { name: "bahia", acronym: "BA" },
    { name: "ceará", acronym: "CE" },
    { name: "distrito federal", acronym: "DF" },
    { name: "espírito santo", acronym: "ES" },
    { name: "goiás", acronym: "GO" },
    { name: "maranhão", acronym: "MA" },
    { name: "mato grosso", acronym: "MT" },
    { name: "mato grosso do sul", acronym: "MS" },
    { name: "minas gerais", acronym: "MG" },
    { name: "pará", acronym: "PA" },
    { name: "paraíba", acronym: "PB" },
    { name: "paraná", acronym: "PR" },
    { name: "pernambuco", acronym: "PE" },
    { name: "piauí", acronym: "PI" },
    { name: "rio de janeiro", acronym: "RJ" },
    { name: "rio grande do norte", acronym: "RN" },
    { name: "rio grande do sul", acronym: "RS" },
    { name: "rondônia", acronym: "RO" },
    { name: "roraima", acronym: "RR" },
    { name: "santa catarina", acronym: "SC" },
    { name: "são paulo", acronym: "SP" },
    { name: "sergipe", acronym: "SE" },
    { name: "tocantins", acronym: "TO" },
  ];
}

function seedCity(): City[] {
  return [
    { name: "rio branco", state_id: 1 },
    { name: "maceió", state_id: 2 },
    { name: "macapá", state_id: 3 },
    { name: "manaus", state_id: 4 },
    { name: "salvador", state_id: 5 },
    { name: "fortaleza", state_id: 6 },
    { name: "brasília", state_id: 7 },
    { name: "vitória", state_id: 8 },
    { name: "goiânia", state_id: 9 },
    { name: "são luís", state_id: 10 },
    { name: "cuiabá", state_id: 11 },
    { name: "campo grande", state_id: 12 },
    { name: "belo horizonte", state_id: 13 },
    { name: "belém", state_id: 14 },
    { name: "joão pessoa", state_id: 15 },
    { name: "curitiba", state_id: 16 },
    { name: "recife", state_id: 17 },
    { name: "teresina", state_id: 18 },
    { name: "rio de janeiro", state_id: 19 },
    { name: "natal", state_id: 20 },
    { name: "porto alegre", state_id: 21 },
    { name: "porto velho", state_id: 22 },
    { name: "boa vista", state_id: 23 },
    { name: "florianópolis", state_id: 24 },
    { name: "são paulo", state_id: 25 },
    { name: "aracaju", state_id: 26 },
    { name: "palmas", state_id: 27 },
  ];
}

function seedPerson(): Person[] {
  return [
    {
      name: "Draymond Green",
      street: "Rua da Sujeira",
      number: "0",
      additional: "Apto 23",
      rg: "NBA123",
      city_id: 1,
      blood_type_id: 1,
    },
    {
      name: "LeBron James",
      street: "Avenida dos Enterradas",
      number: "23",
      additional: "Apto 23",
      rg: "NBA456",
      city_id: 2,
      blood_type_id: 2,
    },
    {
      name: "Stephen Curry",
      street: "Rua dos Três Pontos",
      number: "30",
      additional: "Apto 30",
      rg: "NBA789",
      city_id: 3,
      blood_type_id: 3,
    },
    {
      name: "Giannis Antetokounmpo",
      street: "Avenida do Eurostep",
      number: "34",
      additional: "Apto 34",
      rg: "NBA101",
      city_id: 4,
      blood_type_id: 4,
    },
    {
      name: "Kevin Durant",
      street: "Rua dos MVPs",
      number: "7",
      additional: "Apto 7",
      rg: "NBA202",
      city_id: 5,
      blood_type_id: 5,
    },
    {
      name: "Kawhi Leonard",
      street: "Avenida dos Grandes Jogos",
      number: "2",
      additional: "Apto 2",
      rg: "NBA303",
      city_id: 6,
      blood_type_id: 6,
    },
    {
      name: "Luka Dončić",
      street: "Rua da Bola Mágica",
      number: "77",
      additional: "Apto 77",
      rg: "NBA404",
      city_id: 7,
      blood_type_id: 7,
    },
    {
      name: "Damian Lillard",
      street: "Avenida das Buzzer Beaters",
      number: "0",
      additional: "Apto 0",
      rg: "NBA505",
      city_id: 8,
      blood_type_id: 8,
    },
    {
      name: "James Harden",
      street: "Rua dos Passos Largos",
      number: "13",
      additional: "Apto 13",
      rg: "NBA606",
      city_id: 9,
      blood_type_id: 1,
    },
    {
      name: "Zion Williamson",
      street: "Avenida das Enterradas Monstruosas",
      number: "1",
      additional: "Apto 1",
      rg: "NBA707",
      city_id: 10,
      blood_type_id: 2,
    },
    {
      name: "Chris Paul",
      street: "Rua das Assistências",
      number: "3",
      additional: "Apto 3",
      rg: "NBA808",
      city_id: 11,
      blood_type_id: 3,
    },
    {
      name: "Devin Booker",
      street: "Avenida dos Splash Brothers",
      number: "1",
      additional: "Apto 1",
      rg: "NBA909",
      city_id: 12,
      blood_type_id: 4,
    },
    {
      name: "Joel Embiid",
      street: "Rua dos Blocos",
      number: "21",
      additional: "Apto 21",
      rg: "NBA1010",
      city_id: 13,
      blood_type_id: 5,
    },
    {
      name: "Jayson Tatum",
      street: "Avenida dos Alas",
      number: "0",
      additional: "Apto 0",
      rg: "NBA1111",
      city_id: 14,
      blood_type_id: 6,
    },
    {
      name: "Jimmy Butler",
      street: "Rua da Competitividade",
      number: "23",
      additional: "Apto 23",
      rg: "NBA1212",
      city_id: 15,
      blood_type_id: 7,
    },
    {
      name: "Karl-Anthony Towns",
      street: "Avenida das Triplos-Duplos",
      number: "32",
      additional: "Apto 32",
      rg: "NBA1313",
      city_id: 16,
      blood_type_id: 8,
    },
    {
      name: "Donovan Mitchell",
      street: "Rua da Elegância",
      number: "45",
      additional: "Apto 45",
      rg: "NBA1414",
      city_id: 17,
      blood_type_id: 1,
    },
    {
      name: "DeAaron Fox",
      street: "Avenida da Velocidade",
      number: "5",
      additional: "Apto 5",
      rg: "NBA1515",
      city_id: 18,
      blood_type_id: 2,
    },
    {
      name: "Jaylen Brown",
      street: "Rua dos Jovens Talentos",
      number: "7",
      additional: "Apto 7",
      rg: "NBA1616",
      city_id: 19,
      blood_type_id: 3,
    },
    {
      name: "Jamal Murray",
      street: "Avenida dos Arremessos Difíceis",
      number: "27",
      additional: "Apto 27",
      rg: "NBA1717",
      city_id: 20,
      blood_type_id: 4,
    },
    {
      name: "Ben Simmons",
      street: "Rua da Versatilidade",
      number: "25",
      additional: "Apto 25",
      rg: "NBA1818",
      city_id: 21,
      blood_type_id: 5,
    },
    {
      name: "DeMar DeRozan",
      street: "Avenida dos Mid-Range",
      number: "10",
      additional: "Apto 10",
      rg: "NBA1919",
      city_id: 22,
      blood_type_id: 6,
    },
    {
      name: "Rudy Gobert",
      street: "Rua dos Blocks",
      number: "27",
      additional: "Apto 27",
      rg: "NBA2020",
      city_id: 23,
      blood_type_id: 7,
    },
    {
      name: "Trae Young",
      street: "Avenida das Jogadas Espetaculares",
      number: "11",
      additional: "Apto 11",
      rg: "NBA2121",
      city_id: 24,
      blood_type_id: 8,
    },
    {
      name: "Khris Middleton",
      street: "Rua das Bolas de 3",
      number: "22",
      additional: "Apto 22",
      rg: "NBA2222",
      city_id: 25,
      blood_type_id: 1,
    },
    {
      name: "John Wall",
      street: "Avenida da Velocidade",
      number: "1",
      additional: "Apto 1",
      rg: "NBA2323",
      city_id: 26,
      blood_type_id: 2,
    },
    {
      name: "CJ McCollum",
      street: "Rua dos Arremessos Precisos",
      number: "3",
      additional: "Apto 3",
      rg: "NBA2424",
      city_id: 27,
      blood_type_id: 3,
    },
  ];
}

function seedDonationPoint(): DonationPoint[] {
  return [
    {
      name: "Sorriso Solidário",
      street: "Rua Esperança",
      number: "123",
      additional: "Apto 1",
      city_id: 1,
    },
    {
      name: "Alegria das Doações",
      street: "Avenida Solidariedade",
      number: "456",
      additional: "Apto 2",
      city_id: 2,
    },
    {
      name: "Doações com Carinho",
      street: "Rua da Generosidade",
      number: "789",
      additional: "Apto 3",
      city_id: 3,
    },
    {
      name: "Amor ao Próximo",
      street: "Avenida Fraternidade",
      number: "101",
      additional: "Apto 4",
      city_id: 4,
    },
    {
      name: "Doações Felizes",
      street: "Rua da Gratidão",
      number: "202",
      additional: "Apto 5",
      city_id: 5,
    },
    {
      name: "Solidariedade em Cores",
      street: "Avenida da Solidariedade",
      number: "303",
      additional: "Apto 6",
      city_id: 6,
    },
    {
      name: "Esperança na Ação",
      street: "Rua da Bondade",
      number: "404",
      additional: "Apto 7",
      city_id: 7,
    },
    {
      name: "Ponto da Generosidade",
      street: "Avenida da Paz",
      number: "505",
      additional: "Apto 8",
      city_id: 8,
    },
    {
      name: "Doe com Alegria",
      street: "Avenida da Felicidade",
      number: "606",
      additional: "Apto 9",
      city_id: 9,
    },
    {
      name: "União Solidária",
      street: "Rua da União",
      number: "707",
      additional: "Apto 10",
      city_id: 10,
    },
    {
      name: "Coração Solidário",
      street: "Rua da Esperança",
      number: "808",
      additional: "Apto 11",
      city_id: 11,
    },
    {
      name: "Doação Fraterna",
      street: "Rua do Amor",
      number: "909",
      additional: "Apto 12",
      city_id: 12,
    },
    {
      name: "Apoio Solidário",
      street: "Avenida da Solidariedade",
      number: "1010",
      additional: "Apto 13",
      city_id: 13,
    },
    {
      name: "Gesto de Bondade",
      street: "Rua da Solidariedade",
      number: "1111",
      additional: "Apto 14",
      city_id: 14,
    },
    {
      name: "Ponto do Amor",
      street: "Rua do Bem",
      number: "1212",
      additional: "Apto 15",
      city_id: 15,
    },
    {
      name: "Carinho nas Doações",
      street: "Avenida da Solidariedade",
      number: "1313",
      additional: "Apto 16",
      city_id: 16,
    },
    {
      name: "Doações Afetuosas",
      street: "Rua da Generosidade",
      number: "1414",
      additional: "Apto 17",
      city_id: 17,
    },
    {
      name: "Solidariedade Serena",
      street: "Avenida do Bem",
      number: "1515",
      additional: "Apto 18",
      city_id: 18,
    },
    {
      name: "Esperança Viva",
      street: "Rua da Solidariedade",
      number: "1616",
      additional: "Apto 19",
      city_id: 19,
    },
    {
      name: "Caminho da Solidariedade",
      street: "Avenida da Fraternidade",
      number: "1717",
      additional: "Apto 20",
      city_id: 20,
    },
    {
      name: "União Solidária",
      street: "Rua da Solidariedade",
      number: "1818",
      additional: "Apto 21",
      city_id: 21,
    },
    {
      name: "Oásis Solidário",
      street: "Avenida da Solidariedade",
      number: "1919",
      additional: "Apto 22",
      city_id: 22,
    },
    {
      name: "Ponto de Doação",
      street: "Rua do Bem",
      number: "2020",
      additional: "Apto 23",
      city_id: 23,
    },
    {
      name: "Coração Generoso",
      street: "Avenida do Bem",
      number: "2121",
      additional: "Apto 24",
      city_id: 24,
    },
    {
      name: "Abrace a Causa",
      street: "Rua da Generosidade",
      number: "2222",
      additional: "Apto 25",
      city_id: 25,
    },
    {
      name: "Doação com Carinho",
      street: "Avenida do Bem",
      number: "2323",
      additional: "Apto 26",
      city_id: 26,
    },
    {
      name: "Ponto de Solidariedade",
      street: "Rua da Solidariedade",
      number: "2424",
      additional: "Apto 27",
      city_id: 27,
    },
  ];
}

function seedDonation(): Donation[] {
  return [
    { person_id: 1, donation_point_id: 1 },
    { person_id: 2, donation_point_id: 2 },
    { person_id: 3, donation_point_id: 3 },
    { person_id: 4, donation_point_id: 4 },
    { person_id: 5, donation_point_id: 5 },
    { person_id: 6, donation_point_id: 6 },
    { person_id: 7, donation_point_id: 7 },
    { person_id: 8, donation_point_id: 8 },
    { person_id: 9, donation_point_id: 9 },
    { person_id: 10, donation_point_id: 10 },
    { person_id: 11, donation_point_id: 11 },
    { person_id: 12, donation_point_id: 12 },
    { person_id: 13, donation_point_id: 13 },
    { person_id: 14, donation_point_id: 14 },
    { person_id: 15, donation_point_id: 15 },
    { person_id: 16, donation_point_id: 16 },
    { person_id: 17, donation_point_id: 17 },
    { person_id: 18, donation_point_id: 18 },
    { person_id: 19, donation_point_id: 19 },
    { person_id: 20, donation_point_id: 20 },
    { person_id: 21, donation_point_id: 21 },
    { person_id: 22, donation_point_id: 22 },
    { person_id: 23, donation_point_id: 23 },
    { person_id: 24, donation_point_id: 24 },
    { person_id: 25, donation_point_id: 25 },
    { person_id: 26, donation_point_id: 26 },
    { person_id: 27, donation_point_id: 27 },
  ];
}
