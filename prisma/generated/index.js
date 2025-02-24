
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.0
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.0",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  username: 'username',
  displayName: 'displayName',
  avatar: 'avatar',
  bio: 'bio',
  isActive: 'isActive',
  rights: 'rights',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AuthorScalarFieldEnum = {
  id: 'id',
  country: 'country',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TafseerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  arabicName: 'arabicName',
  text: 'text',
  filePath: 'filePath',
  language: 'language',
  authorId: 'authorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SurahScalarFieldEnum = {
  id: 'id',
  name: 'name',
  arabicName: 'arabicName',
  number: 'number',
  totalAyahs: 'totalAyahs',
  revelationType: 'revelationType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AyahScalarFieldEnum = {
  id: 'id',
  number: 'number',
  arabicText: 'arabicText',
  uzbekText: 'uzbekText',
  surahId: 'surahId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TafseerAyahScalarFieldEnum = {
  id: 'id',
  text: 'text',
  ayahId: 'ayahId',
  tafseerId: 'tafseerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  AUTHOR: 'AUTHOR'
};

exports.SurahRevelationType = exports.$Enums.SurahRevelationType = {
  MECCAN: 'MECCAN',
  MEDINAN: 'MEDINAN'
};

exports.TafseerLanguage = exports.$Enums.TafseerLanguage = {
  UZBEK: 'UZBEK',
  ARABIC: 'ARABIC'
};

exports.Prisma.ModelName = {
  User: 'User',
  Author: 'Author',
  Tafseer: 'Tafseer',
  Surah: 'Surah',
  Ayah: 'Ayah',
  TafseerAyah: 'TafseerAyah'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/gamalsamadov/Documents/projects/ixlos/ixlos-server/prisma/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/gamalsamadov/Documents/projects/ixlos/ixlos-server/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "6.3.0",
  "engineVersion": "acc0b9dd43eb689cbd20c9470515d719db10d0b0",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_URI",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"POSTGRES_URI\")\n}\n\nmodel User {\n  id          String   @id @default(uuid())\n  email       String   @unique\n  password    String\n  username    String   @unique\n  displayName String   @map(\"display_name\")\n  avatar      String?\n  bio         String?\n  isActive    Boolean  @default(true) @map(\"is_active\")\n  rights      Role[]   @default([USER])\n  author      Author?\n  createdAt   DateTime @default(now()) @map(\"created_at\")\n  updatedAt   DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"users\")\n}\n\nmodel Author {\n  id        String    @id @default(uuid())\n  country   String?\n  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId    String    @unique @map(\"user_id\")\n  tafseers  Tafseer[]\n  createdAt DateTime  @default(now()) @map(\"created_at\")\n  updatedAt DateTime  @updatedAt @map(\"updated_at\")\n\n  @@map(\"authors\")\n}\n\nmodel Tafseer {\n  id         String          @id @default(uuid())\n  name       String\n  arabicName String\n  text       String\n  filePath   String?\n  language   TafseerLanguage @default(UZBEK)\n\n  author   Author        @relation(fields: [authorId], references: [id], onDelete: Cascade)\n  authorId String        @map(\"author_id\")\n  ayahs    TafseerAyah[]\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"tafseers\")\n}\n\nmodel Surah {\n  id             String              @id @default(uuid())\n  name           String\n  arabicName     String\n  number         Int\n  totalAyahs     Int                 @map(\"total_ayahs\")\n  revelationType SurahRevelationType @map(\"revelation_type\")\n  ayahs          Ayah[]\n  createdAt      DateTime            @default(now()) @map(\"created_at\")\n  updatedAt      DateTime            @updatedAt @map(\"updated_at\")\n\n  @@map(\"surahs\")\n}\n\nmodel Ayah {\n  id         String        @id @default(uuid())\n  number     Int\n  arabicText String\n  uzbekText  String\n  surah      Surah         @relation(fields: [surahId], references: [id], onDelete: Cascade)\n  surahId    String        @map(\"surah_id\")\n  tafseers   TafseerAyah[]\n  createdAt  DateTime      @default(now()) @map(\"created_at\")\n  updatedAt  DateTime      @updatedAt @map(\"updated_at\")\n\n  @@map(\"ayahs\")\n}\n\nmodel TafseerAyah {\n  id     String @id @default(uuid())\n  text   String\n  ayah   Ayah   @relation(fields: [ayahId], references: [id], onDelete: Cascade)\n  ayahId String @map(\"ayah_id\")\n\n  tafseer   Tafseer @relation(fields: [tafseerId], references: [id], onDelete: Cascade)\n  tafseerId String  @map(\"tafseer_id\")\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"tafseer_ayahs\")\n}\n\nenum Role {\n  USER\n  ADMIN\n  AUTHOR\n}\n\nenum SurahRevelationType {\n  MECCAN\n  MEDINAN\n}\n\nenum TafseerLanguage {\n  UZBEK\n  ARABIC\n}\n",
  "inlineSchemaHash": "f460e618502d5ccc2735f3a4bd6ac75eac88ad040268f66d26795592835bc696",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated",
    "generated",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayName\",\"dbName\":\"display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"dbName\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rights\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"nativeType\":null,\"default\":[\"USER\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Author\",\"nativeType\":null,\"relationName\":\"AuthorToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Author\":{\"dbName\":\"authors\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"AuthorToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tafseers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tafseer\",\"nativeType\":null,\"relationName\":\"AuthorToTafseer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tafseer\":{\"dbName\":\"tafseers\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arabicName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filePath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TafseerLanguage\",\"nativeType\":null,\"default\":\"UZBEK\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Author\",\"nativeType\":null,\"relationName\":\"AuthorToTafseer\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"dbName\":\"author_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ayahs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TafseerAyah\",\"nativeType\":null,\"relationName\":\"TafseerToTafseerAyah\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Surah\":{\"dbName\":\"surahs\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arabicName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalAyahs\",\"dbName\":\"total_ayahs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revelationType\",\"dbName\":\"revelation_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SurahRevelationType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ayahs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ayah\",\"nativeType\":null,\"relationName\":\"AyahToSurah\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ayah\":{\"dbName\":\"ayahs\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arabicText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uzbekText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surah\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Surah\",\"nativeType\":null,\"relationName\":\"AyahToSurah\",\"relationFromFields\":[\"surahId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surahId\",\"dbName\":\"surah_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tafseers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TafseerAyah\",\"nativeType\":null,\"relationName\":\"AyahToTafseerAyah\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TafseerAyah\":{\"dbName\":\"tafseer_ayahs\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ayah\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ayah\",\"nativeType\":null,\"relationName\":\"AyahToTafseerAyah\",\"relationFromFields\":[\"ayahId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ayahId\",\"dbName\":\"ayah_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tafseer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tafseer\",\"nativeType\":null,\"relationName\":\"TafseerToTafseerAyah\",\"relationFromFields\":[\"tafseerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tafseerId\",\"dbName\":\"tafseer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"AUTHOR\",\"dbName\":null}],\"dbName\":null},\"SurahRevelationType\":{\"values\":[{\"name\":\"MECCAN\",\"dbName\":null},{\"name\":\"MEDINAN\",\"dbName\":null}],\"dbName\":null},\"TafseerLanguage\":{\"values\":[{\"name\":\"UZBEK\",\"dbName\":null},{\"name\":\"ARABIC\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/generated/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/schema.prisma")
