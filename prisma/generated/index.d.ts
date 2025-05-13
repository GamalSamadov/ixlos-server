
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Tafseer
 * 
 */
export type Tafseer = $Result.DefaultSelection<Prisma.$TafseerPayload>
/**
 * Model Surah
 * 
 */
export type Surah = $Result.DefaultSelection<Prisma.$SurahPayload>
/**
 * Model Ayah
 * 
 */
export type Ayah = $Result.DefaultSelection<Prisma.$AyahPayload>
/**
 * Model TafseerAyah
 * 
 */
export type TafseerAyah = $Result.DefaultSelection<Prisma.$TafseerAyahPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  AUTHOR: 'AUTHOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SurahRevelationType: {
  MECCAN: 'MECCAN',
  MEDINAN: 'MEDINAN'
};

export type SurahRevelationType = (typeof SurahRevelationType)[keyof typeof SurahRevelationType]


export const TafseerLanguage: {
  UZBEK: 'UZBEK',
  ARABIC: 'ARABIC'
};

export type TafseerLanguage = (typeof TafseerLanguage)[keyof typeof TafseerLanguage]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SurahRevelationType = $Enums.SurahRevelationType

export const SurahRevelationType: typeof $Enums.SurahRevelationType

export type TafseerLanguage = $Enums.TafseerLanguage

export const TafseerLanguage: typeof $Enums.TafseerLanguage

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tafseer`: Exposes CRUD operations for the **Tafseer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tafseers
    * const tafseers = await prisma.tafseer.findMany()
    * ```
    */
  get tafseer(): Prisma.TafseerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surah`: Exposes CRUD operations for the **Surah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surahs
    * const surahs = await prisma.surah.findMany()
    * ```
    */
  get surah(): Prisma.SurahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ayah`: Exposes CRUD operations for the **Ayah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ayahs
    * const ayahs = await prisma.ayah.findMany()
    * ```
    */
  get ayah(): Prisma.AyahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tafseerAyah`: Exposes CRUD operations for the **TafseerAyah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TafseerAyahs
    * const tafseerAyahs = await prisma.tafseerAyah.findMany()
    * ```
    */
  get tafseerAyah(): Prisma.TafseerAyahDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Author: 'Author',
    Tafseer: 'Tafseer',
    Surah: 'Surah',
    Ayah: 'Ayah',
    TafseerAyah: 'TafseerAyah'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "author" | "tafseer" | "surah" | "ayah" | "tafseerAyah"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Tafseer: {
        payload: Prisma.$TafseerPayload<ExtArgs>
        fields: Prisma.TafseerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TafseerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TafseerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>
          }
          findFirst: {
            args: Prisma.TafseerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TafseerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>
          }
          findMany: {
            args: Prisma.TafseerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>[]
          }
          create: {
            args: Prisma.TafseerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>
          }
          createMany: {
            args: Prisma.TafseerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TafseerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>[]
          }
          delete: {
            args: Prisma.TafseerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>
          }
          update: {
            args: Prisma.TafseerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>
          }
          deleteMany: {
            args: Prisma.TafseerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TafseerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TafseerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>[]
          }
          upsert: {
            args: Prisma.TafseerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerPayload>
          }
          aggregate: {
            args: Prisma.TafseerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTafseer>
          }
          groupBy: {
            args: Prisma.TafseerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TafseerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TafseerCountArgs<ExtArgs>
            result: $Utils.Optional<TafseerCountAggregateOutputType> | number
          }
        }
      }
      Surah: {
        payload: Prisma.$SurahPayload<ExtArgs>
        fields: Prisma.SurahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          findFirst: {
            args: Prisma.SurahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          findMany: {
            args: Prisma.SurahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          create: {
            args: Prisma.SurahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          createMany: {
            args: Prisma.SurahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          delete: {
            args: Prisma.SurahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          update: {
            args: Prisma.SurahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          deleteMany: {
            args: Prisma.SurahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>[]
          }
          upsert: {
            args: Prisma.SurahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurahPayload>
          }
          aggregate: {
            args: Prisma.SurahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurah>
          }
          groupBy: {
            args: Prisma.SurahGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurahGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurahCountArgs<ExtArgs>
            result: $Utils.Optional<SurahCountAggregateOutputType> | number
          }
        }
      }
      Ayah: {
        payload: Prisma.$AyahPayload<ExtArgs>
        fields: Prisma.AyahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AyahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AyahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          findFirst: {
            args: Prisma.AyahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AyahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          findMany: {
            args: Prisma.AyahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          create: {
            args: Prisma.AyahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          createMany: {
            args: Prisma.AyahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AyahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          delete: {
            args: Prisma.AyahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          update: {
            args: Prisma.AyahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          deleteMany: {
            args: Prisma.AyahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AyahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AyahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>[]
          }
          upsert: {
            args: Prisma.AyahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyahPayload>
          }
          aggregate: {
            args: Prisma.AyahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAyah>
          }
          groupBy: {
            args: Prisma.AyahGroupByArgs<ExtArgs>
            result: $Utils.Optional<AyahGroupByOutputType>[]
          }
          count: {
            args: Prisma.AyahCountArgs<ExtArgs>
            result: $Utils.Optional<AyahCountAggregateOutputType> | number
          }
        }
      }
      TafseerAyah: {
        payload: Prisma.$TafseerAyahPayload<ExtArgs>
        fields: Prisma.TafseerAyahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TafseerAyahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TafseerAyahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>
          }
          findFirst: {
            args: Prisma.TafseerAyahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TafseerAyahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>
          }
          findMany: {
            args: Prisma.TafseerAyahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>[]
          }
          create: {
            args: Prisma.TafseerAyahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>
          }
          createMany: {
            args: Prisma.TafseerAyahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TafseerAyahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>[]
          }
          delete: {
            args: Prisma.TafseerAyahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>
          }
          update: {
            args: Prisma.TafseerAyahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>
          }
          deleteMany: {
            args: Prisma.TafseerAyahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TafseerAyahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TafseerAyahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>[]
          }
          upsert: {
            args: Prisma.TafseerAyahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TafseerAyahPayload>
          }
          aggregate: {
            args: Prisma.TafseerAyahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTafseerAyah>
          }
          groupBy: {
            args: Prisma.TafseerAyahGroupByArgs<ExtArgs>
            result: $Utils.Optional<TafseerAyahGroupByOutputType>[]
          }
          count: {
            args: Prisma.TafseerAyahCountArgs<ExtArgs>
            result: $Utils.Optional<TafseerAyahCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    author?: AuthorOmit
    tafseer?: TafseerOmit
    surah?: SurahOmit
    ayah?: AyahOmit
    tafseerAyah?: TafseerAyahOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    tafseers: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tafseers?: boolean | AuthorCountOutputTypeCountTafseersArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountTafseersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TafseerWhereInput
  }


  /**
   * Count Type TafseerCountOutputType
   */

  export type TafseerCountOutputType = {
    ayahs: number
  }

  export type TafseerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayahs?: boolean | TafseerCountOutputTypeCountAyahsArgs
  }

  // Custom InputTypes
  /**
   * TafseerCountOutputType without action
   */
  export type TafseerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerCountOutputType
     */
    select?: TafseerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TafseerCountOutputType without action
   */
  export type TafseerCountOutputTypeCountAyahsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TafseerAyahWhereInput
  }


  /**
   * Count Type SurahCountOutputType
   */

  export type SurahCountOutputType = {
    ayahs: number
  }

  export type SurahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayahs?: boolean | SurahCountOutputTypeCountAyahsArgs
  }

  // Custom InputTypes
  /**
   * SurahCountOutputType without action
   */
  export type SurahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurahCountOutputType
     */
    select?: SurahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurahCountOutputType without action
   */
  export type SurahCountOutputTypeCountAyahsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyahWhereInput
  }


  /**
   * Count Type AyahCountOutputType
   */

  export type AyahCountOutputType = {
    tafseers: number
  }

  export type AyahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tafseers?: boolean | AyahCountOutputTypeCountTafseersArgs
  }

  // Custom InputTypes
  /**
   * AyahCountOutputType without action
   */
  export type AyahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AyahCountOutputType
     */
    select?: AyahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AyahCountOutputType without action
   */
  export type AyahCountOutputTypeCountTafseersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TafseerAyahWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    displayName: string | null
    avatar: string | null
    bio: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    displayName: string | null
    avatar: string | null
    bio: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    displayName: number
    avatar: number
    bio: number
    isActive: number
    rights: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    displayName?: true
    avatar?: true
    bio?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    displayName?: true
    avatar?: true
    bio?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    displayName?: true
    avatar?: true
    bio?: true
    isActive?: true
    rights?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    username: string
    displayName: string
    avatar: string | null
    bio: string | null
    isActive: boolean
    rights: $Enums.Role[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    bio?: boolean
    isActive?: boolean
    rights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | User$authorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    bio?: boolean
    isActive?: boolean
    rights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    bio?: boolean
    isActive?: boolean
    rights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    bio?: boolean
    isActive?: boolean
    rights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "displayName" | "avatar" | "bio" | "isActive" | "rights" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | User$authorArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      username: string
      displayName: string
      avatar: string | null
      bio: string | null
      isActive: boolean
      rights: $Enums.Role[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends User$authorArgs<ExtArgs> = {}>(args?: Subset<T, User$authorArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly rights: FieldRef<"User", 'Role[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.author
   */
  export type User$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    country: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    country: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    country: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    country?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    country?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    country?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: string
    country: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tafseers?: boolean | Author$tafseersArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    country?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tafseers?: boolean | Author$tafseersArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tafseers: Prisma.$TafseerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      country: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    tafseers<T extends Author$tafseersArgs<ExtArgs> = {}>(args?: Subset<T, Author$tafseersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */ 
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'String'>
    readonly country: FieldRef<"Author", 'String'>
    readonly userId: FieldRef<"Author", 'String'>
    readonly createdAt: FieldRef<"Author", 'DateTime'>
    readonly updatedAt: FieldRef<"Author", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.tafseers
   */
  export type Author$tafseersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    where?: TafseerWhereInput
    orderBy?: TafseerOrderByWithRelationInput | TafseerOrderByWithRelationInput[]
    cursor?: TafseerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TafseerScalarFieldEnum | TafseerScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model Tafseer
   */

  export type AggregateTafseer = {
    _count: TafseerCountAggregateOutputType | null
    _min: TafseerMinAggregateOutputType | null
    _max: TafseerMaxAggregateOutputType | null
  }

  export type TafseerMinAggregateOutputType = {
    id: string | null
    name: string | null
    arabicName: string | null
    text: string | null
    filePath: string | null
    language: $Enums.TafseerLanguage | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TafseerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    arabicName: string | null
    text: string | null
    filePath: string | null
    language: $Enums.TafseerLanguage | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TafseerCountAggregateOutputType = {
    id: number
    name: number
    arabicName: number
    text: number
    filePath: number
    language: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TafseerMinAggregateInputType = {
    id?: true
    name?: true
    arabicName?: true
    text?: true
    filePath?: true
    language?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TafseerMaxAggregateInputType = {
    id?: true
    name?: true
    arabicName?: true
    text?: true
    filePath?: true
    language?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TafseerCountAggregateInputType = {
    id?: true
    name?: true
    arabicName?: true
    text?: true
    filePath?: true
    language?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TafseerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tafseer to aggregate.
     */
    where?: TafseerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tafseers to fetch.
     */
    orderBy?: TafseerOrderByWithRelationInput | TafseerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TafseerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tafseers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tafseers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tafseers
    **/
    _count?: true | TafseerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TafseerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TafseerMaxAggregateInputType
  }

  export type GetTafseerAggregateType<T extends TafseerAggregateArgs> = {
        [P in keyof T & keyof AggregateTafseer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTafseer[P]>
      : GetScalarType<T[P], AggregateTafseer[P]>
  }




  export type TafseerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TafseerWhereInput
    orderBy?: TafseerOrderByWithAggregationInput | TafseerOrderByWithAggregationInput[]
    by: TafseerScalarFieldEnum[] | TafseerScalarFieldEnum
    having?: TafseerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TafseerCountAggregateInputType | true
    _min?: TafseerMinAggregateInputType
    _max?: TafseerMaxAggregateInputType
  }

  export type TafseerGroupByOutputType = {
    id: string
    name: string
    arabicName: string
    text: string
    filePath: string | null
    language: $Enums.TafseerLanguage
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: TafseerCountAggregateOutputType | null
    _min: TafseerMinAggregateOutputType | null
    _max: TafseerMaxAggregateOutputType | null
  }

  type GetTafseerGroupByPayload<T extends TafseerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TafseerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TafseerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TafseerGroupByOutputType[P]>
            : GetScalarType<T[P], TafseerGroupByOutputType[P]>
        }
      >
    >


  export type TafseerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arabicName?: boolean
    text?: boolean
    filePath?: boolean
    language?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    ayahs?: boolean | Tafseer$ayahsArgs<ExtArgs>
    _count?: boolean | TafseerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tafseer"]>

  export type TafseerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arabicName?: boolean
    text?: boolean
    filePath?: boolean
    language?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tafseer"]>

  export type TafseerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arabicName?: boolean
    text?: boolean
    filePath?: boolean
    language?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tafseer"]>

  export type TafseerSelectScalar = {
    id?: boolean
    name?: boolean
    arabicName?: boolean
    text?: boolean
    filePath?: boolean
    language?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TafseerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "arabicName" | "text" | "filePath" | "language" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["tafseer"]>
  export type TafseerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    ayahs?: boolean | Tafseer$ayahsArgs<ExtArgs>
    _count?: boolean | TafseerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TafseerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type TafseerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $TafseerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tafseer"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
      ayahs: Prisma.$TafseerAyahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      arabicName: string
      text: string
      filePath: string | null
      language: $Enums.TafseerLanguage
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tafseer"]>
    composites: {}
  }

  type TafseerGetPayload<S extends boolean | null | undefined | TafseerDefaultArgs> = $Result.GetResult<Prisma.$TafseerPayload, S>

  type TafseerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TafseerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TafseerCountAggregateInputType | true
    }

  export interface TafseerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tafseer'], meta: { name: 'Tafseer' } }
    /**
     * Find zero or one Tafseer that matches the filter.
     * @param {TafseerFindUniqueArgs} args - Arguments to find a Tafseer
     * @example
     * // Get one Tafseer
     * const tafseer = await prisma.tafseer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TafseerFindUniqueArgs>(args: SelectSubset<T, TafseerFindUniqueArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tafseer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TafseerFindUniqueOrThrowArgs} args - Arguments to find a Tafseer
     * @example
     * // Get one Tafseer
     * const tafseer = await prisma.tafseer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TafseerFindUniqueOrThrowArgs>(args: SelectSubset<T, TafseerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tafseer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerFindFirstArgs} args - Arguments to find a Tafseer
     * @example
     * // Get one Tafseer
     * const tafseer = await prisma.tafseer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TafseerFindFirstArgs>(args?: SelectSubset<T, TafseerFindFirstArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tafseer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerFindFirstOrThrowArgs} args - Arguments to find a Tafseer
     * @example
     * // Get one Tafseer
     * const tafseer = await prisma.tafseer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TafseerFindFirstOrThrowArgs>(args?: SelectSubset<T, TafseerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tafseers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tafseers
     * const tafseers = await prisma.tafseer.findMany()
     * 
     * // Get first 10 Tafseers
     * const tafseers = await prisma.tafseer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tafseerWithIdOnly = await prisma.tafseer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TafseerFindManyArgs>(args?: SelectSubset<T, TafseerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tafseer.
     * @param {TafseerCreateArgs} args - Arguments to create a Tafseer.
     * @example
     * // Create one Tafseer
     * const Tafseer = await prisma.tafseer.create({
     *   data: {
     *     // ... data to create a Tafseer
     *   }
     * })
     * 
     */
    create<T extends TafseerCreateArgs>(args: SelectSubset<T, TafseerCreateArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tafseers.
     * @param {TafseerCreateManyArgs} args - Arguments to create many Tafseers.
     * @example
     * // Create many Tafseers
     * const tafseer = await prisma.tafseer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TafseerCreateManyArgs>(args?: SelectSubset<T, TafseerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tafseers and returns the data saved in the database.
     * @param {TafseerCreateManyAndReturnArgs} args - Arguments to create many Tafseers.
     * @example
     * // Create many Tafseers
     * const tafseer = await prisma.tafseer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tafseers and only return the `id`
     * const tafseerWithIdOnly = await prisma.tafseer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TafseerCreateManyAndReturnArgs>(args?: SelectSubset<T, TafseerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Tafseer.
     * @param {TafseerDeleteArgs} args - Arguments to delete one Tafseer.
     * @example
     * // Delete one Tafseer
     * const Tafseer = await prisma.tafseer.delete({
     *   where: {
     *     // ... filter to delete one Tafseer
     *   }
     * })
     * 
     */
    delete<T extends TafseerDeleteArgs>(args: SelectSubset<T, TafseerDeleteArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tafseer.
     * @param {TafseerUpdateArgs} args - Arguments to update one Tafseer.
     * @example
     * // Update one Tafseer
     * const tafseer = await prisma.tafseer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TafseerUpdateArgs>(args: SelectSubset<T, TafseerUpdateArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tafseers.
     * @param {TafseerDeleteManyArgs} args - Arguments to filter Tafseers to delete.
     * @example
     * // Delete a few Tafseers
     * const { count } = await prisma.tafseer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TafseerDeleteManyArgs>(args?: SelectSubset<T, TafseerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tafseers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tafseers
     * const tafseer = await prisma.tafseer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TafseerUpdateManyArgs>(args: SelectSubset<T, TafseerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tafseers and returns the data updated in the database.
     * @param {TafseerUpdateManyAndReturnArgs} args - Arguments to update many Tafseers.
     * @example
     * // Update many Tafseers
     * const tafseer = await prisma.tafseer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tafseers and only return the `id`
     * const tafseerWithIdOnly = await prisma.tafseer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TafseerUpdateManyAndReturnArgs>(args: SelectSubset<T, TafseerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Tafseer.
     * @param {TafseerUpsertArgs} args - Arguments to update or create a Tafseer.
     * @example
     * // Update or create a Tafseer
     * const tafseer = await prisma.tafseer.upsert({
     *   create: {
     *     // ... data to create a Tafseer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tafseer we want to update
     *   }
     * })
     */
    upsert<T extends TafseerUpsertArgs>(args: SelectSubset<T, TafseerUpsertArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tafseers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerCountArgs} args - Arguments to filter Tafseers to count.
     * @example
     * // Count the number of Tafseers
     * const count = await prisma.tafseer.count({
     *   where: {
     *     // ... the filter for the Tafseers we want to count
     *   }
     * })
    **/
    count<T extends TafseerCountArgs>(
      args?: Subset<T, TafseerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TafseerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tafseer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TafseerAggregateArgs>(args: Subset<T, TafseerAggregateArgs>): Prisma.PrismaPromise<GetTafseerAggregateType<T>>

    /**
     * Group by Tafseer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TafseerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TafseerGroupByArgs['orderBy'] }
        : { orderBy?: TafseerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TafseerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTafseerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tafseer model
   */
  readonly fields: TafseerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tafseer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TafseerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ayahs<T extends Tafseer$ayahsArgs<ExtArgs> = {}>(args?: Subset<T, Tafseer$ayahsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tafseer model
   */ 
  interface TafseerFieldRefs {
    readonly id: FieldRef<"Tafseer", 'String'>
    readonly name: FieldRef<"Tafseer", 'String'>
    readonly arabicName: FieldRef<"Tafseer", 'String'>
    readonly text: FieldRef<"Tafseer", 'String'>
    readonly filePath: FieldRef<"Tafseer", 'String'>
    readonly language: FieldRef<"Tafseer", 'TafseerLanguage'>
    readonly authorId: FieldRef<"Tafseer", 'String'>
    readonly createdAt: FieldRef<"Tafseer", 'DateTime'>
    readonly updatedAt: FieldRef<"Tafseer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tafseer findUnique
   */
  export type TafseerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * Filter, which Tafseer to fetch.
     */
    where: TafseerWhereUniqueInput
  }

  /**
   * Tafseer findUniqueOrThrow
   */
  export type TafseerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * Filter, which Tafseer to fetch.
     */
    where: TafseerWhereUniqueInput
  }

  /**
   * Tafseer findFirst
   */
  export type TafseerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * Filter, which Tafseer to fetch.
     */
    where?: TafseerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tafseers to fetch.
     */
    orderBy?: TafseerOrderByWithRelationInput | TafseerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tafseers.
     */
    cursor?: TafseerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tafseers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tafseers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tafseers.
     */
    distinct?: TafseerScalarFieldEnum | TafseerScalarFieldEnum[]
  }

  /**
   * Tafseer findFirstOrThrow
   */
  export type TafseerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * Filter, which Tafseer to fetch.
     */
    where?: TafseerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tafseers to fetch.
     */
    orderBy?: TafseerOrderByWithRelationInput | TafseerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tafseers.
     */
    cursor?: TafseerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tafseers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tafseers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tafseers.
     */
    distinct?: TafseerScalarFieldEnum | TafseerScalarFieldEnum[]
  }

  /**
   * Tafseer findMany
   */
  export type TafseerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * Filter, which Tafseers to fetch.
     */
    where?: TafseerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tafseers to fetch.
     */
    orderBy?: TafseerOrderByWithRelationInput | TafseerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tafseers.
     */
    cursor?: TafseerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tafseers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tafseers.
     */
    skip?: number
    distinct?: TafseerScalarFieldEnum | TafseerScalarFieldEnum[]
  }

  /**
   * Tafseer create
   */
  export type TafseerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * The data needed to create a Tafseer.
     */
    data: XOR<TafseerCreateInput, TafseerUncheckedCreateInput>
  }

  /**
   * Tafseer createMany
   */
  export type TafseerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tafseers.
     */
    data: TafseerCreateManyInput | TafseerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tafseer createManyAndReturn
   */
  export type TafseerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * The data used to create many Tafseers.
     */
    data: TafseerCreateManyInput | TafseerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tafseer update
   */
  export type TafseerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * The data needed to update a Tafseer.
     */
    data: XOR<TafseerUpdateInput, TafseerUncheckedUpdateInput>
    /**
     * Choose, which Tafseer to update.
     */
    where: TafseerWhereUniqueInput
  }

  /**
   * Tafseer updateMany
   */
  export type TafseerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tafseers.
     */
    data: XOR<TafseerUpdateManyMutationInput, TafseerUncheckedUpdateManyInput>
    /**
     * Filter which Tafseers to update
     */
    where?: TafseerWhereInput
    /**
     * Limit how many Tafseers to update.
     */
    limit?: number
  }

  /**
   * Tafseer updateManyAndReturn
   */
  export type TafseerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * The data used to update Tafseers.
     */
    data: XOR<TafseerUpdateManyMutationInput, TafseerUncheckedUpdateManyInput>
    /**
     * Filter which Tafseers to update
     */
    where?: TafseerWhereInput
    /**
     * Limit how many Tafseers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tafseer upsert
   */
  export type TafseerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * The filter to search for the Tafseer to update in case it exists.
     */
    where: TafseerWhereUniqueInput
    /**
     * In case the Tafseer found by the `where` argument doesn't exist, create a new Tafseer with this data.
     */
    create: XOR<TafseerCreateInput, TafseerUncheckedCreateInput>
    /**
     * In case the Tafseer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TafseerUpdateInput, TafseerUncheckedUpdateInput>
  }

  /**
   * Tafseer delete
   */
  export type TafseerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
    /**
     * Filter which Tafseer to delete.
     */
    where: TafseerWhereUniqueInput
  }

  /**
   * Tafseer deleteMany
   */
  export type TafseerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tafseers to delete
     */
    where?: TafseerWhereInput
    /**
     * Limit how many Tafseers to delete.
     */
    limit?: number
  }

  /**
   * Tafseer.ayahs
   */
  export type Tafseer$ayahsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    where?: TafseerAyahWhereInput
    orderBy?: TafseerAyahOrderByWithRelationInput | TafseerAyahOrderByWithRelationInput[]
    cursor?: TafseerAyahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TafseerAyahScalarFieldEnum | TafseerAyahScalarFieldEnum[]
  }

  /**
   * Tafseer without action
   */
  export type TafseerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tafseer
     */
    select?: TafseerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tafseer
     */
    omit?: TafseerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerInclude<ExtArgs> | null
  }


  /**
   * Model Surah
   */

  export type AggregateSurah = {
    _count: SurahCountAggregateOutputType | null
    _avg: SurahAvgAggregateOutputType | null
    _sum: SurahSumAggregateOutputType | null
    _min: SurahMinAggregateOutputType | null
    _max: SurahMaxAggregateOutputType | null
  }

  export type SurahAvgAggregateOutputType = {
    number: number | null
    pageNumber: number | null
    totalAyahs: number | null
  }

  export type SurahSumAggregateOutputType = {
    number: number | null
    pageNumber: number | null
    totalAyahs: number | null
  }

  export type SurahMinAggregateOutputType = {
    id: string | null
    name: string | null
    arabicName: string | null
    qfcName: string | null
    uzbekName: string | null
    uzbekNameTranslation: string | null
    number: number | null
    pageNumber: number | null
    totalAyahs: number | null
    revelationType: $Enums.SurahRevelationType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SurahMaxAggregateOutputType = {
    id: string | null
    name: string | null
    arabicName: string | null
    qfcName: string | null
    uzbekName: string | null
    uzbekNameTranslation: string | null
    number: number | null
    pageNumber: number | null
    totalAyahs: number | null
    revelationType: $Enums.SurahRevelationType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SurahCountAggregateOutputType = {
    id: number
    name: number
    arabicName: number
    qfcName: number
    uzbekName: number
    uzbekNameTranslation: number
    number: number
    pageNumber: number
    totalAyahs: number
    revelationType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SurahAvgAggregateInputType = {
    number?: true
    pageNumber?: true
    totalAyahs?: true
  }

  export type SurahSumAggregateInputType = {
    number?: true
    pageNumber?: true
    totalAyahs?: true
  }

  export type SurahMinAggregateInputType = {
    id?: true
    name?: true
    arabicName?: true
    qfcName?: true
    uzbekName?: true
    uzbekNameTranslation?: true
    number?: true
    pageNumber?: true
    totalAyahs?: true
    revelationType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SurahMaxAggregateInputType = {
    id?: true
    name?: true
    arabicName?: true
    qfcName?: true
    uzbekName?: true
    uzbekNameTranslation?: true
    number?: true
    pageNumber?: true
    totalAyahs?: true
    revelationType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SurahCountAggregateInputType = {
    id?: true
    name?: true
    arabicName?: true
    qfcName?: true
    uzbekName?: true
    uzbekNameTranslation?: true
    number?: true
    pageNumber?: true
    totalAyahs?: true
    revelationType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SurahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surah to aggregate.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surahs
    **/
    _count?: true | SurahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurahMaxAggregateInputType
  }

  export type GetSurahAggregateType<T extends SurahAggregateArgs> = {
        [P in keyof T & keyof AggregateSurah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurah[P]>
      : GetScalarType<T[P], AggregateSurah[P]>
  }




  export type SurahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurahWhereInput
    orderBy?: SurahOrderByWithAggregationInput | SurahOrderByWithAggregationInput[]
    by: SurahScalarFieldEnum[] | SurahScalarFieldEnum
    having?: SurahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurahCountAggregateInputType | true
    _avg?: SurahAvgAggregateInputType
    _sum?: SurahSumAggregateInputType
    _min?: SurahMinAggregateInputType
    _max?: SurahMaxAggregateInputType
  }

  export type SurahGroupByOutputType = {
    id: string
    name: string
    arabicName: string
    qfcName: string
    uzbekName: string
    uzbekNameTranslation: string | null
    number: number
    pageNumber: number
    totalAyahs: number
    revelationType: $Enums.SurahRevelationType
    createdAt: Date
    updatedAt: Date
    _count: SurahCountAggregateOutputType | null
    _avg: SurahAvgAggregateOutputType | null
    _sum: SurahSumAggregateOutputType | null
    _min: SurahMinAggregateOutputType | null
    _max: SurahMaxAggregateOutputType | null
  }

  type GetSurahGroupByPayload<T extends SurahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurahGroupByOutputType[P]>
            : GetScalarType<T[P], SurahGroupByOutputType[P]>
        }
      >
    >


  export type SurahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arabicName?: boolean
    qfcName?: boolean
    uzbekName?: boolean
    uzbekNameTranslation?: boolean
    number?: boolean
    pageNumber?: boolean
    totalAyahs?: boolean
    revelationType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ayahs?: boolean | Surah$ayahsArgs<ExtArgs>
    _count?: boolean | SurahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arabicName?: boolean
    qfcName?: boolean
    uzbekName?: boolean
    uzbekNameTranslation?: boolean
    number?: boolean
    pageNumber?: boolean
    totalAyahs?: boolean
    revelationType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arabicName?: boolean
    qfcName?: boolean
    uzbekName?: boolean
    uzbekNameTranslation?: boolean
    number?: boolean
    pageNumber?: boolean
    totalAyahs?: boolean
    revelationType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["surah"]>

  export type SurahSelectScalar = {
    id?: boolean
    name?: boolean
    arabicName?: boolean
    qfcName?: boolean
    uzbekName?: boolean
    uzbekNameTranslation?: boolean
    number?: boolean
    pageNumber?: boolean
    totalAyahs?: boolean
    revelationType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SurahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "arabicName" | "qfcName" | "uzbekName" | "uzbekNameTranslation" | "number" | "pageNumber" | "totalAyahs" | "revelationType" | "createdAt" | "updatedAt", ExtArgs["result"]["surah"]>
  export type SurahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayahs?: boolean | Surah$ayahsArgs<ExtArgs>
    _count?: boolean | SurahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SurahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SurahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SurahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Surah"
    objects: {
      ayahs: Prisma.$AyahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      arabicName: string
      qfcName: string
      uzbekName: string
      uzbekNameTranslation: string | null
      number: number
      pageNumber: number
      totalAyahs: number
      revelationType: $Enums.SurahRevelationType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["surah"]>
    composites: {}
  }

  type SurahGetPayload<S extends boolean | null | undefined | SurahDefaultArgs> = $Result.GetResult<Prisma.$SurahPayload, S>

  type SurahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurahCountAggregateInputType | true
    }

  export interface SurahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Surah'], meta: { name: 'Surah' } }
    /**
     * Find zero or one Surah that matches the filter.
     * @param {SurahFindUniqueArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurahFindUniqueArgs>(args: SelectSubset<T, SurahFindUniqueArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Surah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurahFindUniqueOrThrowArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurahFindUniqueOrThrowArgs>(args: SelectSubset<T, SurahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Surah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindFirstArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurahFindFirstArgs>(args?: SelectSubset<T, SurahFindFirstArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Surah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindFirstOrThrowArgs} args - Arguments to find a Surah
     * @example
     * // Get one Surah
     * const surah = await prisma.surah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurahFindFirstOrThrowArgs>(args?: SelectSubset<T, SurahFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Surahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surahs
     * const surahs = await prisma.surah.findMany()
     * 
     * // Get first 10 Surahs
     * const surahs = await prisma.surah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surahWithIdOnly = await prisma.surah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurahFindManyArgs>(args?: SelectSubset<T, SurahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Surah.
     * @param {SurahCreateArgs} args - Arguments to create a Surah.
     * @example
     * // Create one Surah
     * const Surah = await prisma.surah.create({
     *   data: {
     *     // ... data to create a Surah
     *   }
     * })
     * 
     */
    create<T extends SurahCreateArgs>(args: SelectSubset<T, SurahCreateArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Surahs.
     * @param {SurahCreateManyArgs} args - Arguments to create many Surahs.
     * @example
     * // Create many Surahs
     * const surah = await prisma.surah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurahCreateManyArgs>(args?: SelectSubset<T, SurahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surahs and returns the data saved in the database.
     * @param {SurahCreateManyAndReturnArgs} args - Arguments to create many Surahs.
     * @example
     * // Create many Surahs
     * const surah = await prisma.surah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surahs and only return the `id`
     * const surahWithIdOnly = await prisma.surah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurahCreateManyAndReturnArgs>(args?: SelectSubset<T, SurahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Surah.
     * @param {SurahDeleteArgs} args - Arguments to delete one Surah.
     * @example
     * // Delete one Surah
     * const Surah = await prisma.surah.delete({
     *   where: {
     *     // ... filter to delete one Surah
     *   }
     * })
     * 
     */
    delete<T extends SurahDeleteArgs>(args: SelectSubset<T, SurahDeleteArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Surah.
     * @param {SurahUpdateArgs} args - Arguments to update one Surah.
     * @example
     * // Update one Surah
     * const surah = await prisma.surah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurahUpdateArgs>(args: SelectSubset<T, SurahUpdateArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Surahs.
     * @param {SurahDeleteManyArgs} args - Arguments to filter Surahs to delete.
     * @example
     * // Delete a few Surahs
     * const { count } = await prisma.surah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurahDeleteManyArgs>(args?: SelectSubset<T, SurahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surahs
     * const surah = await prisma.surah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurahUpdateManyArgs>(args: SelectSubset<T, SurahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surahs and returns the data updated in the database.
     * @param {SurahUpdateManyAndReturnArgs} args - Arguments to update many Surahs.
     * @example
     * // Update many Surahs
     * const surah = await prisma.surah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Surahs and only return the `id`
     * const surahWithIdOnly = await prisma.surah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SurahUpdateManyAndReturnArgs>(args: SelectSubset<T, SurahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Surah.
     * @param {SurahUpsertArgs} args - Arguments to update or create a Surah.
     * @example
     * // Update or create a Surah
     * const surah = await prisma.surah.upsert({
     *   create: {
     *     // ... data to create a Surah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surah we want to update
     *   }
     * })
     */
    upsert<T extends SurahUpsertArgs>(args: SelectSubset<T, SurahUpsertArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Surahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahCountArgs} args - Arguments to filter Surahs to count.
     * @example
     * // Count the number of Surahs
     * const count = await prisma.surah.count({
     *   where: {
     *     // ... the filter for the Surahs we want to count
     *   }
     * })
    **/
    count<T extends SurahCountArgs>(
      args?: Subset<T, SurahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurahAggregateArgs>(args: Subset<T, SurahAggregateArgs>): Prisma.PrismaPromise<GetSurahAggregateType<T>>

    /**
     * Group by Surah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurahGroupByArgs['orderBy'] }
        : { orderBy?: SurahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Surah model
   */
  readonly fields: SurahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Surah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ayahs<T extends Surah$ayahsArgs<ExtArgs> = {}>(args?: Subset<T, Surah$ayahsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Surah model
   */ 
  interface SurahFieldRefs {
    readonly id: FieldRef<"Surah", 'String'>
    readonly name: FieldRef<"Surah", 'String'>
    readonly arabicName: FieldRef<"Surah", 'String'>
    readonly qfcName: FieldRef<"Surah", 'String'>
    readonly uzbekName: FieldRef<"Surah", 'String'>
    readonly uzbekNameTranslation: FieldRef<"Surah", 'String'>
    readonly number: FieldRef<"Surah", 'Int'>
    readonly pageNumber: FieldRef<"Surah", 'Int'>
    readonly totalAyahs: FieldRef<"Surah", 'Int'>
    readonly revelationType: FieldRef<"Surah", 'SurahRevelationType'>
    readonly createdAt: FieldRef<"Surah", 'DateTime'>
    readonly updatedAt: FieldRef<"Surah", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Surah findUnique
   */
  export type SurahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah findUniqueOrThrow
   */
  export type SurahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah findFirst
   */
  export type SurahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah findFirstOrThrow
   */
  export type SurahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surah to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surahs.
     */
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah findMany
   */
  export type SurahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter, which Surahs to fetch.
     */
    where?: SurahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surahs to fetch.
     */
    orderBy?: SurahOrderByWithRelationInput | SurahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surahs.
     */
    cursor?: SurahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surahs.
     */
    skip?: number
    distinct?: SurahScalarFieldEnum | SurahScalarFieldEnum[]
  }

  /**
   * Surah create
   */
  export type SurahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The data needed to create a Surah.
     */
    data: XOR<SurahCreateInput, SurahUncheckedCreateInput>
  }

  /**
   * Surah createMany
   */
  export type SurahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surahs.
     */
    data: SurahCreateManyInput | SurahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surah createManyAndReturn
   */
  export type SurahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * The data used to create many Surahs.
     */
    data: SurahCreateManyInput | SurahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surah update
   */
  export type SurahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The data needed to update a Surah.
     */
    data: XOR<SurahUpdateInput, SurahUncheckedUpdateInput>
    /**
     * Choose, which Surah to update.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah updateMany
   */
  export type SurahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surahs.
     */
    data: XOR<SurahUpdateManyMutationInput, SurahUncheckedUpdateManyInput>
    /**
     * Filter which Surahs to update
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to update.
     */
    limit?: number
  }

  /**
   * Surah updateManyAndReturn
   */
  export type SurahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * The data used to update Surahs.
     */
    data: XOR<SurahUpdateManyMutationInput, SurahUncheckedUpdateManyInput>
    /**
     * Filter which Surahs to update
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to update.
     */
    limit?: number
  }

  /**
   * Surah upsert
   */
  export type SurahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * The filter to search for the Surah to update in case it exists.
     */
    where: SurahWhereUniqueInput
    /**
     * In case the Surah found by the `where` argument doesn't exist, create a new Surah with this data.
     */
    create: XOR<SurahCreateInput, SurahUncheckedCreateInput>
    /**
     * In case the Surah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurahUpdateInput, SurahUncheckedUpdateInput>
  }

  /**
   * Surah delete
   */
  export type SurahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
    /**
     * Filter which Surah to delete.
     */
    where: SurahWhereUniqueInput
  }

  /**
   * Surah deleteMany
   */
  export type SurahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surahs to delete
     */
    where?: SurahWhereInput
    /**
     * Limit how many Surahs to delete.
     */
    limit?: number
  }

  /**
   * Surah.ayahs
   */
  export type Surah$ayahsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    where?: AyahWhereInput
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    cursor?: AyahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Surah without action
   */
  export type SurahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surah
     */
    select?: SurahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surah
     */
    omit?: SurahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurahInclude<ExtArgs> | null
  }


  /**
   * Model Ayah
   */

  export type AggregateAyah = {
    _count: AyahCountAggregateOutputType | null
    _avg: AyahAvgAggregateOutputType | null
    _sum: AyahSumAggregateOutputType | null
    _min: AyahMinAggregateOutputType | null
    _max: AyahMaxAggregateOutputType | null
  }

  export type AyahAvgAggregateOutputType = {
    number: number | null
    pageNumber: number | null
  }

  export type AyahSumAggregateOutputType = {
    number: number | null
    pageNumber: number | null
  }

  export type AyahMinAggregateOutputType = {
    id: string | null
    number: number | null
    arabicText: string | null
    uzbekTextInLatin: string | null
    uzbekTextInCyrillic: string | null
    qcfText: string | null
    surahId: string | null
    pageNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AyahMaxAggregateOutputType = {
    id: string | null
    number: number | null
    arabicText: string | null
    uzbekTextInLatin: string | null
    uzbekTextInCyrillic: string | null
    qcfText: string | null
    surahId: string | null
    pageNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AyahCountAggregateOutputType = {
    id: number
    number: number
    arabicText: number
    uzbekTextInLatin: number
    uzbekTextInCyrillic: number
    qcfText: number
    surahId: number
    pageNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AyahAvgAggregateInputType = {
    number?: true
    pageNumber?: true
  }

  export type AyahSumAggregateInputType = {
    number?: true
    pageNumber?: true
  }

  export type AyahMinAggregateInputType = {
    id?: true
    number?: true
    arabicText?: true
    uzbekTextInLatin?: true
    uzbekTextInCyrillic?: true
    qcfText?: true
    surahId?: true
    pageNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AyahMaxAggregateInputType = {
    id?: true
    number?: true
    arabicText?: true
    uzbekTextInLatin?: true
    uzbekTextInCyrillic?: true
    qcfText?: true
    surahId?: true
    pageNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AyahCountAggregateInputType = {
    id?: true
    number?: true
    arabicText?: true
    uzbekTextInLatin?: true
    uzbekTextInCyrillic?: true
    qcfText?: true
    surahId?: true
    pageNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AyahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayah to aggregate.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ayahs
    **/
    _count?: true | AyahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AyahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AyahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AyahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AyahMaxAggregateInputType
  }

  export type GetAyahAggregateType<T extends AyahAggregateArgs> = {
        [P in keyof T & keyof AggregateAyah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAyah[P]>
      : GetScalarType<T[P], AggregateAyah[P]>
  }




  export type AyahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyahWhereInput
    orderBy?: AyahOrderByWithAggregationInput | AyahOrderByWithAggregationInput[]
    by: AyahScalarFieldEnum[] | AyahScalarFieldEnum
    having?: AyahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AyahCountAggregateInputType | true
    _avg?: AyahAvgAggregateInputType
    _sum?: AyahSumAggregateInputType
    _min?: AyahMinAggregateInputType
    _max?: AyahMaxAggregateInputType
  }

  export type AyahGroupByOutputType = {
    id: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    surahId: string
    pageNumber: number
    createdAt: Date
    updatedAt: Date
    _count: AyahCountAggregateOutputType | null
    _avg: AyahAvgAggregateOutputType | null
    _sum: AyahSumAggregateOutputType | null
    _min: AyahMinAggregateOutputType | null
    _max: AyahMaxAggregateOutputType | null
  }

  type GetAyahGroupByPayload<T extends AyahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AyahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AyahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AyahGroupByOutputType[P]>
            : GetScalarType<T[P], AyahGroupByOutputType[P]>
        }
      >
    >


  export type AyahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    arabicText?: boolean
    uzbekTextInLatin?: boolean
    uzbekTextInCyrillic?: boolean
    qcfText?: boolean
    surahId?: boolean
    pageNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
    tafseers?: boolean | Ayah$tafseersArgs<ExtArgs>
    _count?: boolean | AyahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    arabicText?: boolean
    uzbekTextInLatin?: boolean
    uzbekTextInCyrillic?: boolean
    qcfText?: boolean
    surahId?: boolean
    pageNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    arabicText?: boolean
    uzbekTextInLatin?: boolean
    uzbekTextInCyrillic?: boolean
    qcfText?: boolean
    surahId?: boolean
    pageNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayah"]>

  export type AyahSelectScalar = {
    id?: boolean
    number?: boolean
    arabicText?: boolean
    uzbekTextInLatin?: boolean
    uzbekTextInCyrillic?: boolean
    qcfText?: boolean
    surahId?: boolean
    pageNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AyahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "arabicText" | "uzbekTextInLatin" | "uzbekTextInCyrillic" | "qcfText" | "surahId" | "pageNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["ayah"]>
  export type AyahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
    tafseers?: boolean | Ayah$tafseersArgs<ExtArgs>
    _count?: boolean | AyahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AyahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }
  export type AyahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surah?: boolean | SurahDefaultArgs<ExtArgs>
  }

  export type $AyahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ayah"
    objects: {
      surah: Prisma.$SurahPayload<ExtArgs>
      tafseers: Prisma.$TafseerAyahPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      arabicText: string
      uzbekTextInLatin: string
      uzbekTextInCyrillic: string
      qcfText: string
      surahId: string
      pageNumber: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ayah"]>
    composites: {}
  }

  type AyahGetPayload<S extends boolean | null | undefined | AyahDefaultArgs> = $Result.GetResult<Prisma.$AyahPayload, S>

  type AyahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AyahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AyahCountAggregateInputType | true
    }

  export interface AyahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ayah'], meta: { name: 'Ayah' } }
    /**
     * Find zero or one Ayah that matches the filter.
     * @param {AyahFindUniqueArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AyahFindUniqueArgs>(args: SelectSubset<T, AyahFindUniqueArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Ayah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AyahFindUniqueOrThrowArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AyahFindUniqueOrThrowArgs>(args: SelectSubset<T, AyahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Ayah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindFirstArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AyahFindFirstArgs>(args?: SelectSubset<T, AyahFindFirstArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Ayah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindFirstOrThrowArgs} args - Arguments to find a Ayah
     * @example
     * // Get one Ayah
     * const ayah = await prisma.ayah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AyahFindFirstOrThrowArgs>(args?: SelectSubset<T, AyahFindFirstOrThrowArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Ayahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ayahs
     * const ayahs = await prisma.ayah.findMany()
     * 
     * // Get first 10 Ayahs
     * const ayahs = await prisma.ayah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ayahWithIdOnly = await prisma.ayah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AyahFindManyArgs>(args?: SelectSubset<T, AyahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Ayah.
     * @param {AyahCreateArgs} args - Arguments to create a Ayah.
     * @example
     * // Create one Ayah
     * const Ayah = await prisma.ayah.create({
     *   data: {
     *     // ... data to create a Ayah
     *   }
     * })
     * 
     */
    create<T extends AyahCreateArgs>(args: SelectSubset<T, AyahCreateArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Ayahs.
     * @param {AyahCreateManyArgs} args - Arguments to create many Ayahs.
     * @example
     * // Create many Ayahs
     * const ayah = await prisma.ayah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AyahCreateManyArgs>(args?: SelectSubset<T, AyahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ayahs and returns the data saved in the database.
     * @param {AyahCreateManyAndReturnArgs} args - Arguments to create many Ayahs.
     * @example
     * // Create many Ayahs
     * const ayah = await prisma.ayah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ayahs and only return the `id`
     * const ayahWithIdOnly = await prisma.ayah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AyahCreateManyAndReturnArgs>(args?: SelectSubset<T, AyahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Ayah.
     * @param {AyahDeleteArgs} args - Arguments to delete one Ayah.
     * @example
     * // Delete one Ayah
     * const Ayah = await prisma.ayah.delete({
     *   where: {
     *     // ... filter to delete one Ayah
     *   }
     * })
     * 
     */
    delete<T extends AyahDeleteArgs>(args: SelectSubset<T, AyahDeleteArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Ayah.
     * @param {AyahUpdateArgs} args - Arguments to update one Ayah.
     * @example
     * // Update one Ayah
     * const ayah = await prisma.ayah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AyahUpdateArgs>(args: SelectSubset<T, AyahUpdateArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Ayahs.
     * @param {AyahDeleteManyArgs} args - Arguments to filter Ayahs to delete.
     * @example
     * // Delete a few Ayahs
     * const { count } = await prisma.ayah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AyahDeleteManyArgs>(args?: SelectSubset<T, AyahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ayahs
     * const ayah = await prisma.ayah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AyahUpdateManyArgs>(args: SelectSubset<T, AyahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayahs and returns the data updated in the database.
     * @param {AyahUpdateManyAndReturnArgs} args - Arguments to update many Ayahs.
     * @example
     * // Update many Ayahs
     * const ayah = await prisma.ayah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ayahs and only return the `id`
     * const ayahWithIdOnly = await prisma.ayah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AyahUpdateManyAndReturnArgs>(args: SelectSubset<T, AyahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Ayah.
     * @param {AyahUpsertArgs} args - Arguments to update or create a Ayah.
     * @example
     * // Update or create a Ayah
     * const ayah = await prisma.ayah.upsert({
     *   create: {
     *     // ... data to create a Ayah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ayah we want to update
     *   }
     * })
     */
    upsert<T extends AyahUpsertArgs>(args: SelectSubset<T, AyahUpsertArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Ayahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahCountArgs} args - Arguments to filter Ayahs to count.
     * @example
     * // Count the number of Ayahs
     * const count = await prisma.ayah.count({
     *   where: {
     *     // ... the filter for the Ayahs we want to count
     *   }
     * })
    **/
    count<T extends AyahCountArgs>(
      args?: Subset<T, AyahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AyahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ayah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AyahAggregateArgs>(args: Subset<T, AyahAggregateArgs>): Prisma.PrismaPromise<GetAyahAggregateType<T>>

    /**
     * Group by Ayah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AyahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AyahGroupByArgs['orderBy'] }
        : { orderBy?: AyahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AyahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAyahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ayah model
   */
  readonly fields: AyahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ayah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AyahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    surah<T extends SurahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurahDefaultArgs<ExtArgs>>): Prisma__SurahClient<$Result.GetResult<Prisma.$SurahPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    tafseers<T extends Ayah$tafseersArgs<ExtArgs> = {}>(args?: Subset<T, Ayah$tafseersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ayah model
   */ 
  interface AyahFieldRefs {
    readonly id: FieldRef<"Ayah", 'String'>
    readonly number: FieldRef<"Ayah", 'Int'>
    readonly arabicText: FieldRef<"Ayah", 'String'>
    readonly uzbekTextInLatin: FieldRef<"Ayah", 'String'>
    readonly uzbekTextInCyrillic: FieldRef<"Ayah", 'String'>
    readonly qcfText: FieldRef<"Ayah", 'String'>
    readonly surahId: FieldRef<"Ayah", 'String'>
    readonly pageNumber: FieldRef<"Ayah", 'Int'>
    readonly createdAt: FieldRef<"Ayah", 'DateTime'>
    readonly updatedAt: FieldRef<"Ayah", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ayah findUnique
   */
  export type AyahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah findUniqueOrThrow
   */
  export type AyahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah findFirst
   */
  export type AyahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayahs.
     */
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah findFirstOrThrow
   */
  export type AyahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayah to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayahs.
     */
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah findMany
   */
  export type AyahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter, which Ayahs to fetch.
     */
    where?: AyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayahs to fetch.
     */
    orderBy?: AyahOrderByWithRelationInput | AyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ayahs.
     */
    cursor?: AyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayahs.
     */
    skip?: number
    distinct?: AyahScalarFieldEnum | AyahScalarFieldEnum[]
  }

  /**
   * Ayah create
   */
  export type AyahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The data needed to create a Ayah.
     */
    data: XOR<AyahCreateInput, AyahUncheckedCreateInput>
  }

  /**
   * Ayah createMany
   */
  export type AyahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ayahs.
     */
    data: AyahCreateManyInput | AyahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ayah createManyAndReturn
   */
  export type AyahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * The data used to create many Ayahs.
     */
    data: AyahCreateManyInput | AyahCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ayah update
   */
  export type AyahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The data needed to update a Ayah.
     */
    data: XOR<AyahUpdateInput, AyahUncheckedUpdateInput>
    /**
     * Choose, which Ayah to update.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah updateMany
   */
  export type AyahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ayahs.
     */
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyInput>
    /**
     * Filter which Ayahs to update
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to update.
     */
    limit?: number
  }

  /**
   * Ayah updateManyAndReturn
   */
  export type AyahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * The data used to update Ayahs.
     */
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyInput>
    /**
     * Filter which Ayahs to update
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ayah upsert
   */
  export type AyahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * The filter to search for the Ayah to update in case it exists.
     */
    where: AyahWhereUniqueInput
    /**
     * In case the Ayah found by the `where` argument doesn't exist, create a new Ayah with this data.
     */
    create: XOR<AyahCreateInput, AyahUncheckedCreateInput>
    /**
     * In case the Ayah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AyahUpdateInput, AyahUncheckedUpdateInput>
  }

  /**
   * Ayah delete
   */
  export type AyahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
    /**
     * Filter which Ayah to delete.
     */
    where: AyahWhereUniqueInput
  }

  /**
   * Ayah deleteMany
   */
  export type AyahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayahs to delete
     */
    where?: AyahWhereInput
    /**
     * Limit how many Ayahs to delete.
     */
    limit?: number
  }

  /**
   * Ayah.tafseers
   */
  export type Ayah$tafseersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    where?: TafseerAyahWhereInput
    orderBy?: TafseerAyahOrderByWithRelationInput | TafseerAyahOrderByWithRelationInput[]
    cursor?: TafseerAyahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TafseerAyahScalarFieldEnum | TafseerAyahScalarFieldEnum[]
  }

  /**
   * Ayah without action
   */
  export type AyahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayah
     */
    select?: AyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayah
     */
    omit?: AyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyahInclude<ExtArgs> | null
  }


  /**
   * Model TafseerAyah
   */

  export type AggregateTafseerAyah = {
    _count: TafseerAyahCountAggregateOutputType | null
    _min: TafseerAyahMinAggregateOutputType | null
    _max: TafseerAyahMaxAggregateOutputType | null
  }

  export type TafseerAyahMinAggregateOutputType = {
    id: string | null
    text: string | null
    ayahId: string | null
    tafseerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TafseerAyahMaxAggregateOutputType = {
    id: string | null
    text: string | null
    ayahId: string | null
    tafseerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TafseerAyahCountAggregateOutputType = {
    id: number
    text: number
    ayahId: number
    tafseerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TafseerAyahMinAggregateInputType = {
    id?: true
    text?: true
    ayahId?: true
    tafseerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TafseerAyahMaxAggregateInputType = {
    id?: true
    text?: true
    ayahId?: true
    tafseerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TafseerAyahCountAggregateInputType = {
    id?: true
    text?: true
    ayahId?: true
    tafseerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TafseerAyahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TafseerAyah to aggregate.
     */
    where?: TafseerAyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TafseerAyahs to fetch.
     */
    orderBy?: TafseerAyahOrderByWithRelationInput | TafseerAyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TafseerAyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TafseerAyahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TafseerAyahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TafseerAyahs
    **/
    _count?: true | TafseerAyahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TafseerAyahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TafseerAyahMaxAggregateInputType
  }

  export type GetTafseerAyahAggregateType<T extends TafseerAyahAggregateArgs> = {
        [P in keyof T & keyof AggregateTafseerAyah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTafseerAyah[P]>
      : GetScalarType<T[P], AggregateTafseerAyah[P]>
  }




  export type TafseerAyahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TafseerAyahWhereInput
    orderBy?: TafseerAyahOrderByWithAggregationInput | TafseerAyahOrderByWithAggregationInput[]
    by: TafseerAyahScalarFieldEnum[] | TafseerAyahScalarFieldEnum
    having?: TafseerAyahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TafseerAyahCountAggregateInputType | true
    _min?: TafseerAyahMinAggregateInputType
    _max?: TafseerAyahMaxAggregateInputType
  }

  export type TafseerAyahGroupByOutputType = {
    id: string
    text: string
    ayahId: string
    tafseerId: string
    createdAt: Date
    updatedAt: Date
    _count: TafseerAyahCountAggregateOutputType | null
    _min: TafseerAyahMinAggregateOutputType | null
    _max: TafseerAyahMaxAggregateOutputType | null
  }

  type GetTafseerAyahGroupByPayload<T extends TafseerAyahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TafseerAyahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TafseerAyahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TafseerAyahGroupByOutputType[P]>
            : GetScalarType<T[P], TafseerAyahGroupByOutputType[P]>
        }
      >
    >


  export type TafseerAyahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    ayahId?: boolean
    tafseerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ayah?: boolean | AyahDefaultArgs<ExtArgs>
    tafseer?: boolean | TafseerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tafseerAyah"]>

  export type TafseerAyahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    ayahId?: boolean
    tafseerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ayah?: boolean | AyahDefaultArgs<ExtArgs>
    tafseer?: boolean | TafseerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tafseerAyah"]>

  export type TafseerAyahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    ayahId?: boolean
    tafseerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ayah?: boolean | AyahDefaultArgs<ExtArgs>
    tafseer?: boolean | TafseerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tafseerAyah"]>

  export type TafseerAyahSelectScalar = {
    id?: boolean
    text?: boolean
    ayahId?: boolean
    tafseerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TafseerAyahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "ayahId" | "tafseerId" | "createdAt" | "updatedAt", ExtArgs["result"]["tafseerAyah"]>
  export type TafseerAyahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayah?: boolean | AyahDefaultArgs<ExtArgs>
    tafseer?: boolean | TafseerDefaultArgs<ExtArgs>
  }
  export type TafseerAyahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayah?: boolean | AyahDefaultArgs<ExtArgs>
    tafseer?: boolean | TafseerDefaultArgs<ExtArgs>
  }
  export type TafseerAyahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayah?: boolean | AyahDefaultArgs<ExtArgs>
    tafseer?: boolean | TafseerDefaultArgs<ExtArgs>
  }

  export type $TafseerAyahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TafseerAyah"
    objects: {
      ayah: Prisma.$AyahPayload<ExtArgs>
      tafseer: Prisma.$TafseerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      ayahId: string
      tafseerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tafseerAyah"]>
    composites: {}
  }

  type TafseerAyahGetPayload<S extends boolean | null | undefined | TafseerAyahDefaultArgs> = $Result.GetResult<Prisma.$TafseerAyahPayload, S>

  type TafseerAyahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TafseerAyahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TafseerAyahCountAggregateInputType | true
    }

  export interface TafseerAyahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TafseerAyah'], meta: { name: 'TafseerAyah' } }
    /**
     * Find zero or one TafseerAyah that matches the filter.
     * @param {TafseerAyahFindUniqueArgs} args - Arguments to find a TafseerAyah
     * @example
     * // Get one TafseerAyah
     * const tafseerAyah = await prisma.tafseerAyah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TafseerAyahFindUniqueArgs>(args: SelectSubset<T, TafseerAyahFindUniqueArgs<ExtArgs>>): Prisma__TafseerAyahClient<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TafseerAyah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TafseerAyahFindUniqueOrThrowArgs} args - Arguments to find a TafseerAyah
     * @example
     * // Get one TafseerAyah
     * const tafseerAyah = await prisma.tafseerAyah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TafseerAyahFindUniqueOrThrowArgs>(args: SelectSubset<T, TafseerAyahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TafseerAyahClient<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TafseerAyah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerAyahFindFirstArgs} args - Arguments to find a TafseerAyah
     * @example
     * // Get one TafseerAyah
     * const tafseerAyah = await prisma.tafseerAyah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TafseerAyahFindFirstArgs>(args?: SelectSubset<T, TafseerAyahFindFirstArgs<ExtArgs>>): Prisma__TafseerAyahClient<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TafseerAyah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerAyahFindFirstOrThrowArgs} args - Arguments to find a TafseerAyah
     * @example
     * // Get one TafseerAyah
     * const tafseerAyah = await prisma.tafseerAyah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TafseerAyahFindFirstOrThrowArgs>(args?: SelectSubset<T, TafseerAyahFindFirstOrThrowArgs<ExtArgs>>): Prisma__TafseerAyahClient<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TafseerAyahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerAyahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TafseerAyahs
     * const tafseerAyahs = await prisma.tafseerAyah.findMany()
     * 
     * // Get first 10 TafseerAyahs
     * const tafseerAyahs = await prisma.tafseerAyah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tafseerAyahWithIdOnly = await prisma.tafseerAyah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TafseerAyahFindManyArgs>(args?: SelectSubset<T, TafseerAyahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TafseerAyah.
     * @param {TafseerAyahCreateArgs} args - Arguments to create a TafseerAyah.
     * @example
     * // Create one TafseerAyah
     * const TafseerAyah = await prisma.tafseerAyah.create({
     *   data: {
     *     // ... data to create a TafseerAyah
     *   }
     * })
     * 
     */
    create<T extends TafseerAyahCreateArgs>(args: SelectSubset<T, TafseerAyahCreateArgs<ExtArgs>>): Prisma__TafseerAyahClient<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TafseerAyahs.
     * @param {TafseerAyahCreateManyArgs} args - Arguments to create many TafseerAyahs.
     * @example
     * // Create many TafseerAyahs
     * const tafseerAyah = await prisma.tafseerAyah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TafseerAyahCreateManyArgs>(args?: SelectSubset<T, TafseerAyahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TafseerAyahs and returns the data saved in the database.
     * @param {TafseerAyahCreateManyAndReturnArgs} args - Arguments to create many TafseerAyahs.
     * @example
     * // Create many TafseerAyahs
     * const tafseerAyah = await prisma.tafseerAyah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TafseerAyahs and only return the `id`
     * const tafseerAyahWithIdOnly = await prisma.tafseerAyah.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TafseerAyahCreateManyAndReturnArgs>(args?: SelectSubset<T, TafseerAyahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TafseerAyah.
     * @param {TafseerAyahDeleteArgs} args - Arguments to delete one TafseerAyah.
     * @example
     * // Delete one TafseerAyah
     * const TafseerAyah = await prisma.tafseerAyah.delete({
     *   where: {
     *     // ... filter to delete one TafseerAyah
     *   }
     * })
     * 
     */
    delete<T extends TafseerAyahDeleteArgs>(args: SelectSubset<T, TafseerAyahDeleteArgs<ExtArgs>>): Prisma__TafseerAyahClient<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TafseerAyah.
     * @param {TafseerAyahUpdateArgs} args - Arguments to update one TafseerAyah.
     * @example
     * // Update one TafseerAyah
     * const tafseerAyah = await prisma.tafseerAyah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TafseerAyahUpdateArgs>(args: SelectSubset<T, TafseerAyahUpdateArgs<ExtArgs>>): Prisma__TafseerAyahClient<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TafseerAyahs.
     * @param {TafseerAyahDeleteManyArgs} args - Arguments to filter TafseerAyahs to delete.
     * @example
     * // Delete a few TafseerAyahs
     * const { count } = await prisma.tafseerAyah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TafseerAyahDeleteManyArgs>(args?: SelectSubset<T, TafseerAyahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TafseerAyahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerAyahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TafseerAyahs
     * const tafseerAyah = await prisma.tafseerAyah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TafseerAyahUpdateManyArgs>(args: SelectSubset<T, TafseerAyahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TafseerAyahs and returns the data updated in the database.
     * @param {TafseerAyahUpdateManyAndReturnArgs} args - Arguments to update many TafseerAyahs.
     * @example
     * // Update many TafseerAyahs
     * const tafseerAyah = await prisma.tafseerAyah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TafseerAyahs and only return the `id`
     * const tafseerAyahWithIdOnly = await prisma.tafseerAyah.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TafseerAyahUpdateManyAndReturnArgs>(args: SelectSubset<T, TafseerAyahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TafseerAyah.
     * @param {TafseerAyahUpsertArgs} args - Arguments to update or create a TafseerAyah.
     * @example
     * // Update or create a TafseerAyah
     * const tafseerAyah = await prisma.tafseerAyah.upsert({
     *   create: {
     *     // ... data to create a TafseerAyah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TafseerAyah we want to update
     *   }
     * })
     */
    upsert<T extends TafseerAyahUpsertArgs>(args: SelectSubset<T, TafseerAyahUpsertArgs<ExtArgs>>): Prisma__TafseerAyahClient<$Result.GetResult<Prisma.$TafseerAyahPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TafseerAyahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerAyahCountArgs} args - Arguments to filter TafseerAyahs to count.
     * @example
     * // Count the number of TafseerAyahs
     * const count = await prisma.tafseerAyah.count({
     *   where: {
     *     // ... the filter for the TafseerAyahs we want to count
     *   }
     * })
    **/
    count<T extends TafseerAyahCountArgs>(
      args?: Subset<T, TafseerAyahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TafseerAyahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TafseerAyah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerAyahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TafseerAyahAggregateArgs>(args: Subset<T, TafseerAyahAggregateArgs>): Prisma.PrismaPromise<GetTafseerAyahAggregateType<T>>

    /**
     * Group by TafseerAyah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TafseerAyahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TafseerAyahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TafseerAyahGroupByArgs['orderBy'] }
        : { orderBy?: TafseerAyahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TafseerAyahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTafseerAyahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TafseerAyah model
   */
  readonly fields: TafseerAyahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TafseerAyah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TafseerAyahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ayah<T extends AyahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AyahDefaultArgs<ExtArgs>>): Prisma__AyahClient<$Result.GetResult<Prisma.$AyahPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    tafseer<T extends TafseerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TafseerDefaultArgs<ExtArgs>>): Prisma__TafseerClient<$Result.GetResult<Prisma.$TafseerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TafseerAyah model
   */ 
  interface TafseerAyahFieldRefs {
    readonly id: FieldRef<"TafseerAyah", 'String'>
    readonly text: FieldRef<"TafseerAyah", 'String'>
    readonly ayahId: FieldRef<"TafseerAyah", 'String'>
    readonly tafseerId: FieldRef<"TafseerAyah", 'String'>
    readonly createdAt: FieldRef<"TafseerAyah", 'DateTime'>
    readonly updatedAt: FieldRef<"TafseerAyah", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TafseerAyah findUnique
   */
  export type TafseerAyahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * Filter, which TafseerAyah to fetch.
     */
    where: TafseerAyahWhereUniqueInput
  }

  /**
   * TafseerAyah findUniqueOrThrow
   */
  export type TafseerAyahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * Filter, which TafseerAyah to fetch.
     */
    where: TafseerAyahWhereUniqueInput
  }

  /**
   * TafseerAyah findFirst
   */
  export type TafseerAyahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * Filter, which TafseerAyah to fetch.
     */
    where?: TafseerAyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TafseerAyahs to fetch.
     */
    orderBy?: TafseerAyahOrderByWithRelationInput | TafseerAyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TafseerAyahs.
     */
    cursor?: TafseerAyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TafseerAyahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TafseerAyahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TafseerAyahs.
     */
    distinct?: TafseerAyahScalarFieldEnum | TafseerAyahScalarFieldEnum[]
  }

  /**
   * TafseerAyah findFirstOrThrow
   */
  export type TafseerAyahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * Filter, which TafseerAyah to fetch.
     */
    where?: TafseerAyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TafseerAyahs to fetch.
     */
    orderBy?: TafseerAyahOrderByWithRelationInput | TafseerAyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TafseerAyahs.
     */
    cursor?: TafseerAyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TafseerAyahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TafseerAyahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TafseerAyahs.
     */
    distinct?: TafseerAyahScalarFieldEnum | TafseerAyahScalarFieldEnum[]
  }

  /**
   * TafseerAyah findMany
   */
  export type TafseerAyahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * Filter, which TafseerAyahs to fetch.
     */
    where?: TafseerAyahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TafseerAyahs to fetch.
     */
    orderBy?: TafseerAyahOrderByWithRelationInput | TafseerAyahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TafseerAyahs.
     */
    cursor?: TafseerAyahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TafseerAyahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TafseerAyahs.
     */
    skip?: number
    distinct?: TafseerAyahScalarFieldEnum | TafseerAyahScalarFieldEnum[]
  }

  /**
   * TafseerAyah create
   */
  export type TafseerAyahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * The data needed to create a TafseerAyah.
     */
    data: XOR<TafseerAyahCreateInput, TafseerAyahUncheckedCreateInput>
  }

  /**
   * TafseerAyah createMany
   */
  export type TafseerAyahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TafseerAyahs.
     */
    data: TafseerAyahCreateManyInput | TafseerAyahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TafseerAyah createManyAndReturn
   */
  export type TafseerAyahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * The data used to create many TafseerAyahs.
     */
    data: TafseerAyahCreateManyInput | TafseerAyahCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TafseerAyah update
   */
  export type TafseerAyahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * The data needed to update a TafseerAyah.
     */
    data: XOR<TafseerAyahUpdateInput, TafseerAyahUncheckedUpdateInput>
    /**
     * Choose, which TafseerAyah to update.
     */
    where: TafseerAyahWhereUniqueInput
  }

  /**
   * TafseerAyah updateMany
   */
  export type TafseerAyahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TafseerAyahs.
     */
    data: XOR<TafseerAyahUpdateManyMutationInput, TafseerAyahUncheckedUpdateManyInput>
    /**
     * Filter which TafseerAyahs to update
     */
    where?: TafseerAyahWhereInput
    /**
     * Limit how many TafseerAyahs to update.
     */
    limit?: number
  }

  /**
   * TafseerAyah updateManyAndReturn
   */
  export type TafseerAyahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * The data used to update TafseerAyahs.
     */
    data: XOR<TafseerAyahUpdateManyMutationInput, TafseerAyahUncheckedUpdateManyInput>
    /**
     * Filter which TafseerAyahs to update
     */
    where?: TafseerAyahWhereInput
    /**
     * Limit how many TafseerAyahs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TafseerAyah upsert
   */
  export type TafseerAyahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * The filter to search for the TafseerAyah to update in case it exists.
     */
    where: TafseerAyahWhereUniqueInput
    /**
     * In case the TafseerAyah found by the `where` argument doesn't exist, create a new TafseerAyah with this data.
     */
    create: XOR<TafseerAyahCreateInput, TafseerAyahUncheckedCreateInput>
    /**
     * In case the TafseerAyah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TafseerAyahUpdateInput, TafseerAyahUncheckedUpdateInput>
  }

  /**
   * TafseerAyah delete
   */
  export type TafseerAyahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
    /**
     * Filter which TafseerAyah to delete.
     */
    where: TafseerAyahWhereUniqueInput
  }

  /**
   * TafseerAyah deleteMany
   */
  export type TafseerAyahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TafseerAyahs to delete
     */
    where?: TafseerAyahWhereInput
    /**
     * Limit how many TafseerAyahs to delete.
     */
    limit?: number
  }

  /**
   * TafseerAyah without action
   */
  export type TafseerAyahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TafseerAyah
     */
    select?: TafseerAyahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TafseerAyah
     */
    omit?: TafseerAyahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TafseerAyahInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    country: 'country',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const TafseerScalarFieldEnum: {
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

  export type TafseerScalarFieldEnum = (typeof TafseerScalarFieldEnum)[keyof typeof TafseerScalarFieldEnum]


  export const SurahScalarFieldEnum: {
    id: 'id',
    name: 'name',
    arabicName: 'arabicName',
    qfcName: 'qfcName',
    uzbekName: 'uzbekName',
    uzbekNameTranslation: 'uzbekNameTranslation',
    number: 'number',
    pageNumber: 'pageNumber',
    totalAyahs: 'totalAyahs',
    revelationType: 'revelationType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SurahScalarFieldEnum = (typeof SurahScalarFieldEnum)[keyof typeof SurahScalarFieldEnum]


  export const AyahScalarFieldEnum: {
    id: 'id',
    number: 'number',
    arabicText: 'arabicText',
    uzbekTextInLatin: 'uzbekTextInLatin',
    uzbekTextInCyrillic: 'uzbekTextInCyrillic',
    qcfText: 'qcfText',
    surahId: 'surahId',
    pageNumber: 'pageNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AyahScalarFieldEnum = (typeof AyahScalarFieldEnum)[keyof typeof AyahScalarFieldEnum]


  export const TafseerAyahScalarFieldEnum: {
    id: 'id',
    text: 'text',
    ayahId: 'ayahId',
    tafseerId: 'tafseerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TafseerAyahScalarFieldEnum = (typeof TafseerAyahScalarFieldEnum)[keyof typeof TafseerAyahScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TafseerLanguage'
   */
  export type EnumTafseerLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TafseerLanguage'>
    


  /**
   * Reference to a field of type 'TafseerLanguage[]'
   */
  export type ListEnumTafseerLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TafseerLanguage[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SurahRevelationType'
   */
  export type EnumSurahRevelationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurahRevelationType'>
    


  /**
   * Reference to a field of type 'SurahRevelationType[]'
   */
  export type ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurahRevelationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    rights?: EnumRoleNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    author?: XOR<AuthorNullableScalarRelationFilter, AuthorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isActive?: SortOrder
    rights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: AuthorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    rights?: EnumRoleNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    author?: XOR<AuthorNullableScalarRelationFilter, AuthorWhereInput> | null
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isActive?: SortOrder
    rights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    rights?: EnumRoleNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: StringFilter<"Author"> | string
    country?: StringNullableFilter<"Author"> | string | null
    userId?: StringFilter<"Author"> | string
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tafseers?: TafseerListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tafseers?: TafseerOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    country?: StringNullableFilter<"Author"> | string | null
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tafseers?: TafseerListRelationFilter
  }, "id" | "userId">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Author"> | string
    country?: StringNullableWithAggregatesFilter<"Author"> | string | null
    userId?: StringWithAggregatesFilter<"Author"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
  }

  export type TafseerWhereInput = {
    AND?: TafseerWhereInput | TafseerWhereInput[]
    OR?: TafseerWhereInput[]
    NOT?: TafseerWhereInput | TafseerWhereInput[]
    id?: StringFilter<"Tafseer"> | string
    name?: StringFilter<"Tafseer"> | string
    arabicName?: StringFilter<"Tafseer"> | string
    text?: StringFilter<"Tafseer"> | string
    filePath?: StringNullableFilter<"Tafseer"> | string | null
    language?: EnumTafseerLanguageFilter<"Tafseer"> | $Enums.TafseerLanguage
    authorId?: StringFilter<"Tafseer"> | string
    createdAt?: DateTimeFilter<"Tafseer"> | Date | string
    updatedAt?: DateTimeFilter<"Tafseer"> | Date | string
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    ayahs?: TafseerAyahListRelationFilter
  }

  export type TafseerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    text?: SortOrder
    filePath?: SortOrderInput | SortOrder
    language?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: AuthorOrderByWithRelationInput
    ayahs?: TafseerAyahOrderByRelationAggregateInput
  }

  export type TafseerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TafseerWhereInput | TafseerWhereInput[]
    OR?: TafseerWhereInput[]
    NOT?: TafseerWhereInput | TafseerWhereInput[]
    name?: StringFilter<"Tafseer"> | string
    arabicName?: StringFilter<"Tafseer"> | string
    text?: StringFilter<"Tafseer"> | string
    filePath?: StringNullableFilter<"Tafseer"> | string | null
    language?: EnumTafseerLanguageFilter<"Tafseer"> | $Enums.TafseerLanguage
    authorId?: StringFilter<"Tafseer"> | string
    createdAt?: DateTimeFilter<"Tafseer"> | Date | string
    updatedAt?: DateTimeFilter<"Tafseer"> | Date | string
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    ayahs?: TafseerAyahListRelationFilter
  }, "id">

  export type TafseerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    text?: SortOrder
    filePath?: SortOrderInput | SortOrder
    language?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TafseerCountOrderByAggregateInput
    _max?: TafseerMaxOrderByAggregateInput
    _min?: TafseerMinOrderByAggregateInput
  }

  export type TafseerScalarWhereWithAggregatesInput = {
    AND?: TafseerScalarWhereWithAggregatesInput | TafseerScalarWhereWithAggregatesInput[]
    OR?: TafseerScalarWhereWithAggregatesInput[]
    NOT?: TafseerScalarWhereWithAggregatesInput | TafseerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tafseer"> | string
    name?: StringWithAggregatesFilter<"Tafseer"> | string
    arabicName?: StringWithAggregatesFilter<"Tafseer"> | string
    text?: StringWithAggregatesFilter<"Tafseer"> | string
    filePath?: StringNullableWithAggregatesFilter<"Tafseer"> | string | null
    language?: EnumTafseerLanguageWithAggregatesFilter<"Tafseer"> | $Enums.TafseerLanguage
    authorId?: StringWithAggregatesFilter<"Tafseer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tafseer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tafseer"> | Date | string
  }

  export type SurahWhereInput = {
    AND?: SurahWhereInput | SurahWhereInput[]
    OR?: SurahWhereInput[]
    NOT?: SurahWhereInput | SurahWhereInput[]
    id?: StringFilter<"Surah"> | string
    name?: StringFilter<"Surah"> | string
    arabicName?: StringFilter<"Surah"> | string
    qfcName?: StringFilter<"Surah"> | string
    uzbekName?: StringFilter<"Surah"> | string
    uzbekNameTranslation?: StringNullableFilter<"Surah"> | string | null
    number?: IntFilter<"Surah"> | number
    pageNumber?: IntFilter<"Surah"> | number
    totalAyahs?: IntFilter<"Surah"> | number
    revelationType?: EnumSurahRevelationTypeFilter<"Surah"> | $Enums.SurahRevelationType
    createdAt?: DateTimeFilter<"Surah"> | Date | string
    updatedAt?: DateTimeFilter<"Surah"> | Date | string
    ayahs?: AyahListRelationFilter
  }

  export type SurahOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    qfcName?: SortOrder
    uzbekName?: SortOrder
    uzbekNameTranslation?: SortOrderInput | SortOrder
    number?: SortOrder
    pageNumber?: SortOrder
    totalAyahs?: SortOrder
    revelationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ayahs?: AyahOrderByRelationAggregateInput
  }

  export type SurahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    number?: number
    AND?: SurahWhereInput | SurahWhereInput[]
    OR?: SurahWhereInput[]
    NOT?: SurahWhereInput | SurahWhereInput[]
    arabicName?: StringFilter<"Surah"> | string
    qfcName?: StringFilter<"Surah"> | string
    uzbekName?: StringFilter<"Surah"> | string
    uzbekNameTranslation?: StringNullableFilter<"Surah"> | string | null
    pageNumber?: IntFilter<"Surah"> | number
    totalAyahs?: IntFilter<"Surah"> | number
    revelationType?: EnumSurahRevelationTypeFilter<"Surah"> | $Enums.SurahRevelationType
    createdAt?: DateTimeFilter<"Surah"> | Date | string
    updatedAt?: DateTimeFilter<"Surah"> | Date | string
    ayahs?: AyahListRelationFilter
  }, "id" | "name" | "number">

  export type SurahOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    qfcName?: SortOrder
    uzbekName?: SortOrder
    uzbekNameTranslation?: SortOrderInput | SortOrder
    number?: SortOrder
    pageNumber?: SortOrder
    totalAyahs?: SortOrder
    revelationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SurahCountOrderByAggregateInput
    _avg?: SurahAvgOrderByAggregateInput
    _max?: SurahMaxOrderByAggregateInput
    _min?: SurahMinOrderByAggregateInput
    _sum?: SurahSumOrderByAggregateInput
  }

  export type SurahScalarWhereWithAggregatesInput = {
    AND?: SurahScalarWhereWithAggregatesInput | SurahScalarWhereWithAggregatesInput[]
    OR?: SurahScalarWhereWithAggregatesInput[]
    NOT?: SurahScalarWhereWithAggregatesInput | SurahScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Surah"> | string
    name?: StringWithAggregatesFilter<"Surah"> | string
    arabicName?: StringWithAggregatesFilter<"Surah"> | string
    qfcName?: StringWithAggregatesFilter<"Surah"> | string
    uzbekName?: StringWithAggregatesFilter<"Surah"> | string
    uzbekNameTranslation?: StringNullableWithAggregatesFilter<"Surah"> | string | null
    number?: IntWithAggregatesFilter<"Surah"> | number
    pageNumber?: IntWithAggregatesFilter<"Surah"> | number
    totalAyahs?: IntWithAggregatesFilter<"Surah"> | number
    revelationType?: EnumSurahRevelationTypeWithAggregatesFilter<"Surah"> | $Enums.SurahRevelationType
    createdAt?: DateTimeWithAggregatesFilter<"Surah"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Surah"> | Date | string
  }

  export type AyahWhereInput = {
    AND?: AyahWhereInput | AyahWhereInput[]
    OR?: AyahWhereInput[]
    NOT?: AyahWhereInput | AyahWhereInput[]
    id?: StringFilter<"Ayah"> | string
    number?: IntFilter<"Ayah"> | number
    arabicText?: StringFilter<"Ayah"> | string
    uzbekTextInLatin?: StringFilter<"Ayah"> | string
    uzbekTextInCyrillic?: StringFilter<"Ayah"> | string
    qcfText?: StringFilter<"Ayah"> | string
    surahId?: StringFilter<"Ayah"> | string
    pageNumber?: IntFilter<"Ayah"> | number
    createdAt?: DateTimeFilter<"Ayah"> | Date | string
    updatedAt?: DateTimeFilter<"Ayah"> | Date | string
    surah?: XOR<SurahScalarRelationFilter, SurahWhereInput>
    tafseers?: TafseerAyahListRelationFilter
  }

  export type AyahOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    arabicText?: SortOrder
    uzbekTextInLatin?: SortOrder
    uzbekTextInCyrillic?: SortOrder
    qcfText?: SortOrder
    surahId?: SortOrder
    pageNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    surah?: SurahOrderByWithRelationInput
    tafseers?: TafseerAyahOrderByRelationAggregateInput
  }

  export type AyahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AyahWhereInput | AyahWhereInput[]
    OR?: AyahWhereInput[]
    NOT?: AyahWhereInput | AyahWhereInput[]
    number?: IntFilter<"Ayah"> | number
    arabicText?: StringFilter<"Ayah"> | string
    uzbekTextInLatin?: StringFilter<"Ayah"> | string
    uzbekTextInCyrillic?: StringFilter<"Ayah"> | string
    qcfText?: StringFilter<"Ayah"> | string
    surahId?: StringFilter<"Ayah"> | string
    pageNumber?: IntFilter<"Ayah"> | number
    createdAt?: DateTimeFilter<"Ayah"> | Date | string
    updatedAt?: DateTimeFilter<"Ayah"> | Date | string
    surah?: XOR<SurahScalarRelationFilter, SurahWhereInput>
    tafseers?: TafseerAyahListRelationFilter
  }, "id">

  export type AyahOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    arabicText?: SortOrder
    uzbekTextInLatin?: SortOrder
    uzbekTextInCyrillic?: SortOrder
    qcfText?: SortOrder
    surahId?: SortOrder
    pageNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AyahCountOrderByAggregateInput
    _avg?: AyahAvgOrderByAggregateInput
    _max?: AyahMaxOrderByAggregateInput
    _min?: AyahMinOrderByAggregateInput
    _sum?: AyahSumOrderByAggregateInput
  }

  export type AyahScalarWhereWithAggregatesInput = {
    AND?: AyahScalarWhereWithAggregatesInput | AyahScalarWhereWithAggregatesInput[]
    OR?: AyahScalarWhereWithAggregatesInput[]
    NOT?: AyahScalarWhereWithAggregatesInput | AyahScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ayah"> | string
    number?: IntWithAggregatesFilter<"Ayah"> | number
    arabicText?: StringWithAggregatesFilter<"Ayah"> | string
    uzbekTextInLatin?: StringWithAggregatesFilter<"Ayah"> | string
    uzbekTextInCyrillic?: StringWithAggregatesFilter<"Ayah"> | string
    qcfText?: StringWithAggregatesFilter<"Ayah"> | string
    surahId?: StringWithAggregatesFilter<"Ayah"> | string
    pageNumber?: IntWithAggregatesFilter<"Ayah"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ayah"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ayah"> | Date | string
  }

  export type TafseerAyahWhereInput = {
    AND?: TafseerAyahWhereInput | TafseerAyahWhereInput[]
    OR?: TafseerAyahWhereInput[]
    NOT?: TafseerAyahWhereInput | TafseerAyahWhereInput[]
    id?: StringFilter<"TafseerAyah"> | string
    text?: StringFilter<"TafseerAyah"> | string
    ayahId?: StringFilter<"TafseerAyah"> | string
    tafseerId?: StringFilter<"TafseerAyah"> | string
    createdAt?: DateTimeFilter<"TafseerAyah"> | Date | string
    updatedAt?: DateTimeFilter<"TafseerAyah"> | Date | string
    ayah?: XOR<AyahScalarRelationFilter, AyahWhereInput>
    tafseer?: XOR<TafseerScalarRelationFilter, TafseerWhereInput>
  }

  export type TafseerAyahOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    ayahId?: SortOrder
    tafseerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ayah?: AyahOrderByWithRelationInput
    tafseer?: TafseerOrderByWithRelationInput
  }

  export type TafseerAyahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TafseerAyahWhereInput | TafseerAyahWhereInput[]
    OR?: TafseerAyahWhereInput[]
    NOT?: TafseerAyahWhereInput | TafseerAyahWhereInput[]
    text?: StringFilter<"TafseerAyah"> | string
    ayahId?: StringFilter<"TafseerAyah"> | string
    tafseerId?: StringFilter<"TafseerAyah"> | string
    createdAt?: DateTimeFilter<"TafseerAyah"> | Date | string
    updatedAt?: DateTimeFilter<"TafseerAyah"> | Date | string
    ayah?: XOR<AyahScalarRelationFilter, AyahWhereInput>
    tafseer?: XOR<TafseerScalarRelationFilter, TafseerWhereInput>
  }, "id">

  export type TafseerAyahOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    ayahId?: SortOrder
    tafseerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TafseerAyahCountOrderByAggregateInput
    _max?: TafseerAyahMaxOrderByAggregateInput
    _min?: TafseerAyahMinOrderByAggregateInput
  }

  export type TafseerAyahScalarWhereWithAggregatesInput = {
    AND?: TafseerAyahScalarWhereWithAggregatesInput | TafseerAyahScalarWhereWithAggregatesInput[]
    OR?: TafseerAyahScalarWhereWithAggregatesInput[]
    NOT?: TafseerAyahScalarWhereWithAggregatesInput | TafseerAyahScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TafseerAyah"> | string
    text?: StringWithAggregatesFilter<"TafseerAyah"> | string
    ayahId?: StringWithAggregatesFilter<"TafseerAyah"> | string
    tafseerId?: StringWithAggregatesFilter<"TafseerAyah"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TafseerAyah"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TafseerAyah"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    username: string
    displayName: string
    avatar?: string | null
    bio?: string | null
    isActive?: boolean
    rights?: UserCreaterightsInput | $Enums.Role[]
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: AuthorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    username: string
    displayName: string
    avatar?: string | null
    bio?: string | null
    isActive?: boolean
    rights?: UserCreaterightsInput | $Enums.Role[]
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: AuthorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rights?: UserUpdaterightsInput | $Enums.Role[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rights?: UserUpdaterightsInput | $Enums.Role[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    username: string
    displayName: string
    avatar?: string | null
    bio?: string | null
    isActive?: boolean
    rights?: UserCreaterightsInput | $Enums.Role[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rights?: UserUpdaterightsInput | $Enums.Role[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rights?: UserUpdaterightsInput | $Enums.Role[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorCreateInput = {
    id?: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAuthorInput
    tafseers?: TafseerCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: string
    country?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tafseers?: TafseerUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthorNestedInput
    tafseers?: TafseerUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tafseers?: TafseerUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: string
    country?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerCreateInput = {
    id?: string
    name: string
    arabicName: string
    text: string
    filePath?: string | null
    language?: $Enums.TafseerLanguage
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutTafseersInput
    ayahs?: TafseerAyahCreateNestedManyWithoutTafseerInput
  }

  export type TafseerUncheckedCreateInput = {
    id?: string
    name: string
    arabicName: string
    text: string
    filePath?: string | null
    language?: $Enums.TafseerLanguage
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ayahs?: TafseerAyahUncheckedCreateNestedManyWithoutTafseerInput
  }

  export type TafseerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutTafseersNestedInput
    ayahs?: TafseerAyahUpdateManyWithoutTafseerNestedInput
  }

  export type TafseerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayahs?: TafseerAyahUncheckedUpdateManyWithoutTafseerNestedInput
  }

  export type TafseerCreateManyInput = {
    id?: string
    name: string
    arabicName: string
    text: string
    filePath?: string | null
    language?: $Enums.TafseerLanguage
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurahCreateInput = {
    id?: string
    name: string
    arabicName: string
    qfcName: string
    uzbekName: string
    uzbekNameTranslation?: string | null
    number: number
    pageNumber?: number
    totalAyahs: number
    revelationType: $Enums.SurahRevelationType
    createdAt?: Date | string
    updatedAt?: Date | string
    ayahs?: AyahCreateNestedManyWithoutSurahInput
  }

  export type SurahUncheckedCreateInput = {
    id?: string
    name: string
    arabicName: string
    qfcName: string
    uzbekName: string
    uzbekNameTranslation?: string | null
    number: number
    pageNumber?: number
    totalAyahs: number
    revelationType: $Enums.SurahRevelationType
    createdAt?: Date | string
    updatedAt?: Date | string
    ayahs?: AyahUncheckedCreateNestedManyWithoutSurahInput
  }

  export type SurahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    qfcName?: StringFieldUpdateOperationsInput | string
    uzbekName?: StringFieldUpdateOperationsInput | string
    uzbekNameTranslation?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    pageNumber?: IntFieldUpdateOperationsInput | number
    totalAyahs?: IntFieldUpdateOperationsInput | number
    revelationType?: EnumSurahRevelationTypeFieldUpdateOperationsInput | $Enums.SurahRevelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayahs?: AyahUpdateManyWithoutSurahNestedInput
  }

  export type SurahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    qfcName?: StringFieldUpdateOperationsInput | string
    uzbekName?: StringFieldUpdateOperationsInput | string
    uzbekNameTranslation?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    pageNumber?: IntFieldUpdateOperationsInput | number
    totalAyahs?: IntFieldUpdateOperationsInput | number
    revelationType?: EnumSurahRevelationTypeFieldUpdateOperationsInput | $Enums.SurahRevelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayahs?: AyahUncheckedUpdateManyWithoutSurahNestedInput
  }

  export type SurahCreateManyInput = {
    id?: string
    name: string
    arabicName: string
    qfcName: string
    uzbekName: string
    uzbekNameTranslation?: string | null
    number: number
    pageNumber?: number
    totalAyahs: number
    revelationType: $Enums.SurahRevelationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    qfcName?: StringFieldUpdateOperationsInput | string
    uzbekName?: StringFieldUpdateOperationsInput | string
    uzbekNameTranslation?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    pageNumber?: IntFieldUpdateOperationsInput | number
    totalAyahs?: IntFieldUpdateOperationsInput | number
    revelationType?: EnumSurahRevelationTypeFieldUpdateOperationsInput | $Enums.SurahRevelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    qfcName?: StringFieldUpdateOperationsInput | string
    uzbekName?: StringFieldUpdateOperationsInput | string
    uzbekNameTranslation?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    pageNumber?: IntFieldUpdateOperationsInput | number
    totalAyahs?: IntFieldUpdateOperationsInput | number
    revelationType?: EnumSurahRevelationTypeFieldUpdateOperationsInput | $Enums.SurahRevelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AyahCreateInput = {
    id?: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    pageNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    surah: SurahCreateNestedOneWithoutAyahsInput
    tafseers?: TafseerAyahCreateNestedManyWithoutAyahInput
  }

  export type AyahUncheckedCreateInput = {
    id?: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    surahId: string
    pageNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tafseers?: TafseerAyahUncheckedCreateNestedManyWithoutAyahInput
  }

  export type AyahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surah?: SurahUpdateOneRequiredWithoutAyahsNestedInput
    tafseers?: TafseerAyahUpdateManyWithoutAyahNestedInput
  }

  export type AyahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    surahId?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tafseers?: TafseerAyahUncheckedUpdateManyWithoutAyahNestedInput
  }

  export type AyahCreateManyInput = {
    id?: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    surahId: string
    pageNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AyahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AyahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    surahId?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ayah: AyahCreateNestedOneWithoutTafseersInput
    tafseer: TafseerCreateNestedOneWithoutAyahsInput
  }

  export type TafseerAyahUncheckedCreateInput = {
    id?: string
    text: string
    ayahId: string
    tafseerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerAyahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayah?: AyahUpdateOneRequiredWithoutTafseersNestedInput
    tafseer?: TafseerUpdateOneRequiredWithoutAyahsNestedInput
  }

  export type TafseerAyahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ayahId?: StringFieldUpdateOperationsInput | string
    tafseerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahCreateManyInput = {
    id?: string
    text: string
    ayahId: string
    tafseerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerAyahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ayahId?: StringFieldUpdateOperationsInput | string
    tafseerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthorNullableScalarRelationFilter = {
    is?: AuthorWhereInput | null
    isNot?: AuthorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    isActive?: SortOrder
    rights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TafseerListRelationFilter = {
    every?: TafseerWhereInput
    some?: TafseerWhereInput
    none?: TafseerWhereInput
  }

  export type TafseerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTafseerLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.TafseerLanguage | EnumTafseerLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.TafseerLanguage[] | ListEnumTafseerLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.TafseerLanguage[] | ListEnumTafseerLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumTafseerLanguageFilter<$PrismaModel> | $Enums.TafseerLanguage
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type TafseerAyahListRelationFilter = {
    every?: TafseerAyahWhereInput
    some?: TafseerAyahWhereInput
    none?: TafseerAyahWhereInput
  }

  export type TafseerAyahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TafseerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    text?: SortOrder
    filePath?: SortOrder
    language?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TafseerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    text?: SortOrder
    filePath?: SortOrder
    language?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TafseerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    text?: SortOrder
    filePath?: SortOrder
    language?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTafseerLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TafseerLanguage | EnumTafseerLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.TafseerLanguage[] | ListEnumTafseerLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.TafseerLanguage[] | ListEnumTafseerLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumTafseerLanguageWithAggregatesFilter<$PrismaModel> | $Enums.TafseerLanguage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTafseerLanguageFilter<$PrismaModel>
    _max?: NestedEnumTafseerLanguageFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumSurahRevelationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SurahRevelationType | EnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurahRevelationType[] | ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurahRevelationType[] | ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurahRevelationTypeFilter<$PrismaModel> | $Enums.SurahRevelationType
  }

  export type AyahListRelationFilter = {
    every?: AyahWhereInput
    some?: AyahWhereInput
    none?: AyahWhereInput
  }

  export type AyahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurahCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    qfcName?: SortOrder
    uzbekName?: SortOrder
    uzbekNameTranslation?: SortOrder
    number?: SortOrder
    pageNumber?: SortOrder
    totalAyahs?: SortOrder
    revelationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurahAvgOrderByAggregateInput = {
    number?: SortOrder
    pageNumber?: SortOrder
    totalAyahs?: SortOrder
  }

  export type SurahMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    qfcName?: SortOrder
    uzbekName?: SortOrder
    uzbekNameTranslation?: SortOrder
    number?: SortOrder
    pageNumber?: SortOrder
    totalAyahs?: SortOrder
    revelationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurahMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabicName?: SortOrder
    qfcName?: SortOrder
    uzbekName?: SortOrder
    uzbekNameTranslation?: SortOrder
    number?: SortOrder
    pageNumber?: SortOrder
    totalAyahs?: SortOrder
    revelationType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurahSumOrderByAggregateInput = {
    number?: SortOrder
    pageNumber?: SortOrder
    totalAyahs?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSurahRevelationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurahRevelationType | EnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurahRevelationType[] | ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurahRevelationType[] | ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurahRevelationTypeWithAggregatesFilter<$PrismaModel> | $Enums.SurahRevelationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSurahRevelationTypeFilter<$PrismaModel>
    _max?: NestedEnumSurahRevelationTypeFilter<$PrismaModel>
  }

  export type SurahScalarRelationFilter = {
    is?: SurahWhereInput
    isNot?: SurahWhereInput
  }

  export type AyahCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    arabicText?: SortOrder
    uzbekTextInLatin?: SortOrder
    uzbekTextInCyrillic?: SortOrder
    qcfText?: SortOrder
    surahId?: SortOrder
    pageNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AyahAvgOrderByAggregateInput = {
    number?: SortOrder
    pageNumber?: SortOrder
  }

  export type AyahMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    arabicText?: SortOrder
    uzbekTextInLatin?: SortOrder
    uzbekTextInCyrillic?: SortOrder
    qcfText?: SortOrder
    surahId?: SortOrder
    pageNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AyahMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    arabicText?: SortOrder
    uzbekTextInLatin?: SortOrder
    uzbekTextInCyrillic?: SortOrder
    qcfText?: SortOrder
    surahId?: SortOrder
    pageNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AyahSumOrderByAggregateInput = {
    number?: SortOrder
    pageNumber?: SortOrder
  }

  export type AyahScalarRelationFilter = {
    is?: AyahWhereInput
    isNot?: AyahWhereInput
  }

  export type TafseerScalarRelationFilter = {
    is?: TafseerWhereInput
    isNot?: TafseerWhereInput
  }

  export type TafseerAyahCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    ayahId?: SortOrder
    tafseerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TafseerAyahMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    ayahId?: SortOrder
    tafseerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TafseerAyahMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    ayahId?: SortOrder
    tafseerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreaterightsInput = {
    set: $Enums.Role[]
  }

  export type AuthorCreateNestedOneWithoutUserInput = {
    create?: XOR<AuthorCreateWithoutUserInput, AuthorUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutUserInput
    connect?: AuthorWhereUniqueInput
  }

  export type AuthorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AuthorCreateWithoutUserInput, AuthorUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutUserInput
    connect?: AuthorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdaterightsInput = {
    set?: $Enums.Role[]
    push?: $Enums.Role | $Enums.Role[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthorUpdateOneWithoutUserNestedInput = {
    create?: XOR<AuthorCreateWithoutUserInput, AuthorUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutUserInput
    upsert?: AuthorUpsertWithoutUserInput
    disconnect?: AuthorWhereInput | boolean
    delete?: AuthorWhereInput | boolean
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutUserInput, AuthorUpdateWithoutUserInput>, AuthorUncheckedUpdateWithoutUserInput>
  }

  export type AuthorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AuthorCreateWithoutUserInput, AuthorUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutUserInput
    upsert?: AuthorUpsertWithoutUserInput
    disconnect?: AuthorWhereInput | boolean
    delete?: AuthorWhereInput | boolean
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutUserInput, AuthorUpdateWithoutUserInput>, AuthorUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAuthorInput = {
    create?: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthorInput
    connect?: UserWhereUniqueInput
  }

  export type TafseerCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TafseerCreateWithoutAuthorInput, TafseerUncheckedCreateWithoutAuthorInput> | TafseerCreateWithoutAuthorInput[] | TafseerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TafseerCreateOrConnectWithoutAuthorInput | TafseerCreateOrConnectWithoutAuthorInput[]
    createMany?: TafseerCreateManyAuthorInputEnvelope
    connect?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
  }

  export type TafseerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TafseerCreateWithoutAuthorInput, TafseerUncheckedCreateWithoutAuthorInput> | TafseerCreateWithoutAuthorInput[] | TafseerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TafseerCreateOrConnectWithoutAuthorInput | TafseerCreateOrConnectWithoutAuthorInput[]
    createMany?: TafseerCreateManyAuthorInputEnvelope
    connect?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAuthorNestedInput = {
    create?: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthorInput
    upsert?: UserUpsertWithoutAuthorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthorInput, UserUpdateWithoutAuthorInput>, UserUncheckedUpdateWithoutAuthorInput>
  }

  export type TafseerUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TafseerCreateWithoutAuthorInput, TafseerUncheckedCreateWithoutAuthorInput> | TafseerCreateWithoutAuthorInput[] | TafseerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TafseerCreateOrConnectWithoutAuthorInput | TafseerCreateOrConnectWithoutAuthorInput[]
    upsert?: TafseerUpsertWithWhereUniqueWithoutAuthorInput | TafseerUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TafseerCreateManyAuthorInputEnvelope
    set?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
    disconnect?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
    delete?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
    connect?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
    update?: TafseerUpdateWithWhereUniqueWithoutAuthorInput | TafseerUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TafseerUpdateManyWithWhereWithoutAuthorInput | TafseerUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TafseerScalarWhereInput | TafseerScalarWhereInput[]
  }

  export type TafseerUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TafseerCreateWithoutAuthorInput, TafseerUncheckedCreateWithoutAuthorInput> | TafseerCreateWithoutAuthorInput[] | TafseerUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TafseerCreateOrConnectWithoutAuthorInput | TafseerCreateOrConnectWithoutAuthorInput[]
    upsert?: TafseerUpsertWithWhereUniqueWithoutAuthorInput | TafseerUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TafseerCreateManyAuthorInputEnvelope
    set?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
    disconnect?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
    delete?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
    connect?: TafseerWhereUniqueInput | TafseerWhereUniqueInput[]
    update?: TafseerUpdateWithWhereUniqueWithoutAuthorInput | TafseerUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TafseerUpdateManyWithWhereWithoutAuthorInput | TafseerUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TafseerScalarWhereInput | TafseerScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutTafseersInput = {
    create?: XOR<AuthorCreateWithoutTafseersInput, AuthorUncheckedCreateWithoutTafseersInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutTafseersInput
    connect?: AuthorWhereUniqueInput
  }

  export type TafseerAyahCreateNestedManyWithoutTafseerInput = {
    create?: XOR<TafseerAyahCreateWithoutTafseerInput, TafseerAyahUncheckedCreateWithoutTafseerInput> | TafseerAyahCreateWithoutTafseerInput[] | TafseerAyahUncheckedCreateWithoutTafseerInput[]
    connectOrCreate?: TafseerAyahCreateOrConnectWithoutTafseerInput | TafseerAyahCreateOrConnectWithoutTafseerInput[]
    createMany?: TafseerAyahCreateManyTafseerInputEnvelope
    connect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
  }

  export type TafseerAyahUncheckedCreateNestedManyWithoutTafseerInput = {
    create?: XOR<TafseerAyahCreateWithoutTafseerInput, TafseerAyahUncheckedCreateWithoutTafseerInput> | TafseerAyahCreateWithoutTafseerInput[] | TafseerAyahUncheckedCreateWithoutTafseerInput[]
    connectOrCreate?: TafseerAyahCreateOrConnectWithoutTafseerInput | TafseerAyahCreateOrConnectWithoutTafseerInput[]
    createMany?: TafseerAyahCreateManyTafseerInputEnvelope
    connect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
  }

  export type EnumTafseerLanguageFieldUpdateOperationsInput = {
    set?: $Enums.TafseerLanguage
  }

  export type AuthorUpdateOneRequiredWithoutTafseersNestedInput = {
    create?: XOR<AuthorCreateWithoutTafseersInput, AuthorUncheckedCreateWithoutTafseersInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutTafseersInput
    upsert?: AuthorUpsertWithoutTafseersInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutTafseersInput, AuthorUpdateWithoutTafseersInput>, AuthorUncheckedUpdateWithoutTafseersInput>
  }

  export type TafseerAyahUpdateManyWithoutTafseerNestedInput = {
    create?: XOR<TafseerAyahCreateWithoutTafseerInput, TafseerAyahUncheckedCreateWithoutTafseerInput> | TafseerAyahCreateWithoutTafseerInput[] | TafseerAyahUncheckedCreateWithoutTafseerInput[]
    connectOrCreate?: TafseerAyahCreateOrConnectWithoutTafseerInput | TafseerAyahCreateOrConnectWithoutTafseerInput[]
    upsert?: TafseerAyahUpsertWithWhereUniqueWithoutTafseerInput | TafseerAyahUpsertWithWhereUniqueWithoutTafseerInput[]
    createMany?: TafseerAyahCreateManyTafseerInputEnvelope
    set?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    disconnect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    delete?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    connect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    update?: TafseerAyahUpdateWithWhereUniqueWithoutTafseerInput | TafseerAyahUpdateWithWhereUniqueWithoutTafseerInput[]
    updateMany?: TafseerAyahUpdateManyWithWhereWithoutTafseerInput | TafseerAyahUpdateManyWithWhereWithoutTafseerInput[]
    deleteMany?: TafseerAyahScalarWhereInput | TafseerAyahScalarWhereInput[]
  }

  export type TafseerAyahUncheckedUpdateManyWithoutTafseerNestedInput = {
    create?: XOR<TafseerAyahCreateWithoutTafseerInput, TafseerAyahUncheckedCreateWithoutTafseerInput> | TafseerAyahCreateWithoutTafseerInput[] | TafseerAyahUncheckedCreateWithoutTafseerInput[]
    connectOrCreate?: TafseerAyahCreateOrConnectWithoutTafseerInput | TafseerAyahCreateOrConnectWithoutTafseerInput[]
    upsert?: TafseerAyahUpsertWithWhereUniqueWithoutTafseerInput | TafseerAyahUpsertWithWhereUniqueWithoutTafseerInput[]
    createMany?: TafseerAyahCreateManyTafseerInputEnvelope
    set?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    disconnect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    delete?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    connect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    update?: TafseerAyahUpdateWithWhereUniqueWithoutTafseerInput | TafseerAyahUpdateWithWhereUniqueWithoutTafseerInput[]
    updateMany?: TafseerAyahUpdateManyWithWhereWithoutTafseerInput | TafseerAyahUpdateManyWithWhereWithoutTafseerInput[]
    deleteMany?: TafseerAyahScalarWhereInput | TafseerAyahScalarWhereInput[]
  }

  export type AyahCreateNestedManyWithoutSurahInput = {
    create?: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput> | AyahCreateWithoutSurahInput[] | AyahUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutSurahInput | AyahCreateOrConnectWithoutSurahInput[]
    createMany?: AyahCreateManySurahInputEnvelope
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
  }

  export type AyahUncheckedCreateNestedManyWithoutSurahInput = {
    create?: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput> | AyahCreateWithoutSurahInput[] | AyahUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutSurahInput | AyahCreateOrConnectWithoutSurahInput[]
    createMany?: AyahCreateManySurahInputEnvelope
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSurahRevelationTypeFieldUpdateOperationsInput = {
    set?: $Enums.SurahRevelationType
  }

  export type AyahUpdateManyWithoutSurahNestedInput = {
    create?: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput> | AyahCreateWithoutSurahInput[] | AyahUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutSurahInput | AyahCreateOrConnectWithoutSurahInput[]
    upsert?: AyahUpsertWithWhereUniqueWithoutSurahInput | AyahUpsertWithWhereUniqueWithoutSurahInput[]
    createMany?: AyahCreateManySurahInputEnvelope
    set?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    disconnect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    delete?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    update?: AyahUpdateWithWhereUniqueWithoutSurahInput | AyahUpdateWithWhereUniqueWithoutSurahInput[]
    updateMany?: AyahUpdateManyWithWhereWithoutSurahInput | AyahUpdateManyWithWhereWithoutSurahInput[]
    deleteMany?: AyahScalarWhereInput | AyahScalarWhereInput[]
  }

  export type AyahUncheckedUpdateManyWithoutSurahNestedInput = {
    create?: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput> | AyahCreateWithoutSurahInput[] | AyahUncheckedCreateWithoutSurahInput[]
    connectOrCreate?: AyahCreateOrConnectWithoutSurahInput | AyahCreateOrConnectWithoutSurahInput[]
    upsert?: AyahUpsertWithWhereUniqueWithoutSurahInput | AyahUpsertWithWhereUniqueWithoutSurahInput[]
    createMany?: AyahCreateManySurahInputEnvelope
    set?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    disconnect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    delete?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    connect?: AyahWhereUniqueInput | AyahWhereUniqueInput[]
    update?: AyahUpdateWithWhereUniqueWithoutSurahInput | AyahUpdateWithWhereUniqueWithoutSurahInput[]
    updateMany?: AyahUpdateManyWithWhereWithoutSurahInput | AyahUpdateManyWithWhereWithoutSurahInput[]
    deleteMany?: AyahScalarWhereInput | AyahScalarWhereInput[]
  }

  export type SurahCreateNestedOneWithoutAyahsInput = {
    create?: XOR<SurahCreateWithoutAyahsInput, SurahUncheckedCreateWithoutAyahsInput>
    connectOrCreate?: SurahCreateOrConnectWithoutAyahsInput
    connect?: SurahWhereUniqueInput
  }

  export type TafseerAyahCreateNestedManyWithoutAyahInput = {
    create?: XOR<TafseerAyahCreateWithoutAyahInput, TafseerAyahUncheckedCreateWithoutAyahInput> | TafseerAyahCreateWithoutAyahInput[] | TafseerAyahUncheckedCreateWithoutAyahInput[]
    connectOrCreate?: TafseerAyahCreateOrConnectWithoutAyahInput | TafseerAyahCreateOrConnectWithoutAyahInput[]
    createMany?: TafseerAyahCreateManyAyahInputEnvelope
    connect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
  }

  export type TafseerAyahUncheckedCreateNestedManyWithoutAyahInput = {
    create?: XOR<TafseerAyahCreateWithoutAyahInput, TafseerAyahUncheckedCreateWithoutAyahInput> | TafseerAyahCreateWithoutAyahInput[] | TafseerAyahUncheckedCreateWithoutAyahInput[]
    connectOrCreate?: TafseerAyahCreateOrConnectWithoutAyahInput | TafseerAyahCreateOrConnectWithoutAyahInput[]
    createMany?: TafseerAyahCreateManyAyahInputEnvelope
    connect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
  }

  export type SurahUpdateOneRequiredWithoutAyahsNestedInput = {
    create?: XOR<SurahCreateWithoutAyahsInput, SurahUncheckedCreateWithoutAyahsInput>
    connectOrCreate?: SurahCreateOrConnectWithoutAyahsInput
    upsert?: SurahUpsertWithoutAyahsInput
    connect?: SurahWhereUniqueInput
    update?: XOR<XOR<SurahUpdateToOneWithWhereWithoutAyahsInput, SurahUpdateWithoutAyahsInput>, SurahUncheckedUpdateWithoutAyahsInput>
  }

  export type TafseerAyahUpdateManyWithoutAyahNestedInput = {
    create?: XOR<TafseerAyahCreateWithoutAyahInput, TafseerAyahUncheckedCreateWithoutAyahInput> | TafseerAyahCreateWithoutAyahInput[] | TafseerAyahUncheckedCreateWithoutAyahInput[]
    connectOrCreate?: TafseerAyahCreateOrConnectWithoutAyahInput | TafseerAyahCreateOrConnectWithoutAyahInput[]
    upsert?: TafseerAyahUpsertWithWhereUniqueWithoutAyahInput | TafseerAyahUpsertWithWhereUniqueWithoutAyahInput[]
    createMany?: TafseerAyahCreateManyAyahInputEnvelope
    set?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    disconnect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    delete?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    connect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    update?: TafseerAyahUpdateWithWhereUniqueWithoutAyahInput | TafseerAyahUpdateWithWhereUniqueWithoutAyahInput[]
    updateMany?: TafseerAyahUpdateManyWithWhereWithoutAyahInput | TafseerAyahUpdateManyWithWhereWithoutAyahInput[]
    deleteMany?: TafseerAyahScalarWhereInput | TafseerAyahScalarWhereInput[]
  }

  export type TafseerAyahUncheckedUpdateManyWithoutAyahNestedInput = {
    create?: XOR<TafseerAyahCreateWithoutAyahInput, TafseerAyahUncheckedCreateWithoutAyahInput> | TafseerAyahCreateWithoutAyahInput[] | TafseerAyahUncheckedCreateWithoutAyahInput[]
    connectOrCreate?: TafseerAyahCreateOrConnectWithoutAyahInput | TafseerAyahCreateOrConnectWithoutAyahInput[]
    upsert?: TafseerAyahUpsertWithWhereUniqueWithoutAyahInput | TafseerAyahUpsertWithWhereUniqueWithoutAyahInput[]
    createMany?: TafseerAyahCreateManyAyahInputEnvelope
    set?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    disconnect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    delete?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    connect?: TafseerAyahWhereUniqueInput | TafseerAyahWhereUniqueInput[]
    update?: TafseerAyahUpdateWithWhereUniqueWithoutAyahInput | TafseerAyahUpdateWithWhereUniqueWithoutAyahInput[]
    updateMany?: TafseerAyahUpdateManyWithWhereWithoutAyahInput | TafseerAyahUpdateManyWithWhereWithoutAyahInput[]
    deleteMany?: TafseerAyahScalarWhereInput | TafseerAyahScalarWhereInput[]
  }

  export type AyahCreateNestedOneWithoutTafseersInput = {
    create?: XOR<AyahCreateWithoutTafseersInput, AyahUncheckedCreateWithoutTafseersInput>
    connectOrCreate?: AyahCreateOrConnectWithoutTafseersInput
    connect?: AyahWhereUniqueInput
  }

  export type TafseerCreateNestedOneWithoutAyahsInput = {
    create?: XOR<TafseerCreateWithoutAyahsInput, TafseerUncheckedCreateWithoutAyahsInput>
    connectOrCreate?: TafseerCreateOrConnectWithoutAyahsInput
    connect?: TafseerWhereUniqueInput
  }

  export type AyahUpdateOneRequiredWithoutTafseersNestedInput = {
    create?: XOR<AyahCreateWithoutTafseersInput, AyahUncheckedCreateWithoutTafseersInput>
    connectOrCreate?: AyahCreateOrConnectWithoutTafseersInput
    upsert?: AyahUpsertWithoutTafseersInput
    connect?: AyahWhereUniqueInput
    update?: XOR<XOR<AyahUpdateToOneWithWhereWithoutTafseersInput, AyahUpdateWithoutTafseersInput>, AyahUncheckedUpdateWithoutTafseersInput>
  }

  export type TafseerUpdateOneRequiredWithoutAyahsNestedInput = {
    create?: XOR<TafseerCreateWithoutAyahsInput, TafseerUncheckedCreateWithoutAyahsInput>
    connectOrCreate?: TafseerCreateOrConnectWithoutAyahsInput
    upsert?: TafseerUpsertWithoutAyahsInput
    connect?: TafseerWhereUniqueInput
    update?: XOR<XOR<TafseerUpdateToOneWithWhereWithoutAyahsInput, TafseerUpdateWithoutAyahsInput>, TafseerUncheckedUpdateWithoutAyahsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTafseerLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.TafseerLanguage | EnumTafseerLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.TafseerLanguage[] | ListEnumTafseerLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.TafseerLanguage[] | ListEnumTafseerLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumTafseerLanguageFilter<$PrismaModel> | $Enums.TafseerLanguage
  }

  export type NestedEnumTafseerLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TafseerLanguage | EnumTafseerLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.TafseerLanguage[] | ListEnumTafseerLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.TafseerLanguage[] | ListEnumTafseerLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumTafseerLanguageWithAggregatesFilter<$PrismaModel> | $Enums.TafseerLanguage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTafseerLanguageFilter<$PrismaModel>
    _max?: NestedEnumTafseerLanguageFilter<$PrismaModel>
  }

  export type NestedEnumSurahRevelationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SurahRevelationType | EnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurahRevelationType[] | ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurahRevelationType[] | ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurahRevelationTypeFilter<$PrismaModel> | $Enums.SurahRevelationType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSurahRevelationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurahRevelationType | EnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurahRevelationType[] | ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurahRevelationType[] | ListEnumSurahRevelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurahRevelationTypeWithAggregatesFilter<$PrismaModel> | $Enums.SurahRevelationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSurahRevelationTypeFilter<$PrismaModel>
    _max?: NestedEnumSurahRevelationTypeFilter<$PrismaModel>
  }

  export type AuthorCreateWithoutUserInput = {
    id?: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tafseers?: TafseerCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutUserInput = {
    id?: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tafseers?: TafseerUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutUserInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutUserInput, AuthorUncheckedCreateWithoutUserInput>
  }

  export type AuthorUpsertWithoutUserInput = {
    update: XOR<AuthorUpdateWithoutUserInput, AuthorUncheckedUpdateWithoutUserInput>
    create: XOR<AuthorCreateWithoutUserInput, AuthorUncheckedCreateWithoutUserInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutUserInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutUserInput, AuthorUncheckedUpdateWithoutUserInput>
  }

  export type AuthorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tafseers?: TafseerUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tafseers?: TafseerUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutAuthorInput = {
    id?: string
    email: string
    password: string
    username: string
    displayName: string
    avatar?: string | null
    bio?: string | null
    isActive?: boolean
    rights?: UserCreaterightsInput | $Enums.Role[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAuthorInput = {
    id?: string
    email: string
    password: string
    username: string
    displayName: string
    avatar?: string | null
    bio?: string | null
    isActive?: boolean
    rights?: UserCreaterightsInput | $Enums.Role[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAuthorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput>
  }

  export type TafseerCreateWithoutAuthorInput = {
    id?: string
    name: string
    arabicName: string
    text: string
    filePath?: string | null
    language?: $Enums.TafseerLanguage
    createdAt?: Date | string
    updatedAt?: Date | string
    ayahs?: TafseerAyahCreateNestedManyWithoutTafseerInput
  }

  export type TafseerUncheckedCreateWithoutAuthorInput = {
    id?: string
    name: string
    arabicName: string
    text: string
    filePath?: string | null
    language?: $Enums.TafseerLanguage
    createdAt?: Date | string
    updatedAt?: Date | string
    ayahs?: TafseerAyahUncheckedCreateNestedManyWithoutTafseerInput
  }

  export type TafseerCreateOrConnectWithoutAuthorInput = {
    where: TafseerWhereUniqueInput
    create: XOR<TafseerCreateWithoutAuthorInput, TafseerUncheckedCreateWithoutAuthorInput>
  }

  export type TafseerCreateManyAuthorInputEnvelope = {
    data: TafseerCreateManyAuthorInput | TafseerCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAuthorInput = {
    update: XOR<UserUpdateWithoutAuthorInput, UserUncheckedUpdateWithoutAuthorInput>
    create: XOR<UserCreateWithoutAuthorInput, UserUncheckedCreateWithoutAuthorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthorInput, UserUncheckedUpdateWithoutAuthorInput>
  }

  export type UserUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rights?: UserUpdaterightsInput | $Enums.Role[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rights?: UserUpdaterightsInput | $Enums.Role[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TafseerWhereUniqueInput
    update: XOR<TafseerUpdateWithoutAuthorInput, TafseerUncheckedUpdateWithoutAuthorInput>
    create: XOR<TafseerCreateWithoutAuthorInput, TafseerUncheckedCreateWithoutAuthorInput>
  }

  export type TafseerUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TafseerWhereUniqueInput
    data: XOR<TafseerUpdateWithoutAuthorInput, TafseerUncheckedUpdateWithoutAuthorInput>
  }

  export type TafseerUpdateManyWithWhereWithoutAuthorInput = {
    where: TafseerScalarWhereInput
    data: XOR<TafseerUpdateManyMutationInput, TafseerUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TafseerScalarWhereInput = {
    AND?: TafseerScalarWhereInput | TafseerScalarWhereInput[]
    OR?: TafseerScalarWhereInput[]
    NOT?: TafseerScalarWhereInput | TafseerScalarWhereInput[]
    id?: StringFilter<"Tafseer"> | string
    name?: StringFilter<"Tafseer"> | string
    arabicName?: StringFilter<"Tafseer"> | string
    text?: StringFilter<"Tafseer"> | string
    filePath?: StringNullableFilter<"Tafseer"> | string | null
    language?: EnumTafseerLanguageFilter<"Tafseer"> | $Enums.TafseerLanguage
    authorId?: StringFilter<"Tafseer"> | string
    createdAt?: DateTimeFilter<"Tafseer"> | Date | string
    updatedAt?: DateTimeFilter<"Tafseer"> | Date | string
  }

  export type AuthorCreateWithoutTafseersInput = {
    id?: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutTafseersInput = {
    id?: string
    country?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorCreateOrConnectWithoutTafseersInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutTafseersInput, AuthorUncheckedCreateWithoutTafseersInput>
  }

  export type TafseerAyahCreateWithoutTafseerInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ayah: AyahCreateNestedOneWithoutTafseersInput
  }

  export type TafseerAyahUncheckedCreateWithoutTafseerInput = {
    id?: string
    text: string
    ayahId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerAyahCreateOrConnectWithoutTafseerInput = {
    where: TafseerAyahWhereUniqueInput
    create: XOR<TafseerAyahCreateWithoutTafseerInput, TafseerAyahUncheckedCreateWithoutTafseerInput>
  }

  export type TafseerAyahCreateManyTafseerInputEnvelope = {
    data: TafseerAyahCreateManyTafseerInput | TafseerAyahCreateManyTafseerInput[]
    skipDuplicates?: boolean
  }

  export type AuthorUpsertWithoutTafseersInput = {
    update: XOR<AuthorUpdateWithoutTafseersInput, AuthorUncheckedUpdateWithoutTafseersInput>
    create: XOR<AuthorCreateWithoutTafseersInput, AuthorUncheckedCreateWithoutTafseersInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutTafseersInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutTafseersInput, AuthorUncheckedUpdateWithoutTafseersInput>
  }

  export type AuthorUpdateWithoutTafseersInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutTafseersInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahUpsertWithWhereUniqueWithoutTafseerInput = {
    where: TafseerAyahWhereUniqueInput
    update: XOR<TafseerAyahUpdateWithoutTafseerInput, TafseerAyahUncheckedUpdateWithoutTafseerInput>
    create: XOR<TafseerAyahCreateWithoutTafseerInput, TafseerAyahUncheckedCreateWithoutTafseerInput>
  }

  export type TafseerAyahUpdateWithWhereUniqueWithoutTafseerInput = {
    where: TafseerAyahWhereUniqueInput
    data: XOR<TafseerAyahUpdateWithoutTafseerInput, TafseerAyahUncheckedUpdateWithoutTafseerInput>
  }

  export type TafseerAyahUpdateManyWithWhereWithoutTafseerInput = {
    where: TafseerAyahScalarWhereInput
    data: XOR<TafseerAyahUpdateManyMutationInput, TafseerAyahUncheckedUpdateManyWithoutTafseerInput>
  }

  export type TafseerAyahScalarWhereInput = {
    AND?: TafseerAyahScalarWhereInput | TafseerAyahScalarWhereInput[]
    OR?: TafseerAyahScalarWhereInput[]
    NOT?: TafseerAyahScalarWhereInput | TafseerAyahScalarWhereInput[]
    id?: StringFilter<"TafseerAyah"> | string
    text?: StringFilter<"TafseerAyah"> | string
    ayahId?: StringFilter<"TafseerAyah"> | string
    tafseerId?: StringFilter<"TafseerAyah"> | string
    createdAt?: DateTimeFilter<"TafseerAyah"> | Date | string
    updatedAt?: DateTimeFilter<"TafseerAyah"> | Date | string
  }

  export type AyahCreateWithoutSurahInput = {
    id?: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    pageNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tafseers?: TafseerAyahCreateNestedManyWithoutAyahInput
  }

  export type AyahUncheckedCreateWithoutSurahInput = {
    id?: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    pageNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tafseers?: TafseerAyahUncheckedCreateNestedManyWithoutAyahInput
  }

  export type AyahCreateOrConnectWithoutSurahInput = {
    where: AyahWhereUniqueInput
    create: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput>
  }

  export type AyahCreateManySurahInputEnvelope = {
    data: AyahCreateManySurahInput | AyahCreateManySurahInput[]
    skipDuplicates?: boolean
  }

  export type AyahUpsertWithWhereUniqueWithoutSurahInput = {
    where: AyahWhereUniqueInput
    update: XOR<AyahUpdateWithoutSurahInput, AyahUncheckedUpdateWithoutSurahInput>
    create: XOR<AyahCreateWithoutSurahInput, AyahUncheckedCreateWithoutSurahInput>
  }

  export type AyahUpdateWithWhereUniqueWithoutSurahInput = {
    where: AyahWhereUniqueInput
    data: XOR<AyahUpdateWithoutSurahInput, AyahUncheckedUpdateWithoutSurahInput>
  }

  export type AyahUpdateManyWithWhereWithoutSurahInput = {
    where: AyahScalarWhereInput
    data: XOR<AyahUpdateManyMutationInput, AyahUncheckedUpdateManyWithoutSurahInput>
  }

  export type AyahScalarWhereInput = {
    AND?: AyahScalarWhereInput | AyahScalarWhereInput[]
    OR?: AyahScalarWhereInput[]
    NOT?: AyahScalarWhereInput | AyahScalarWhereInput[]
    id?: StringFilter<"Ayah"> | string
    number?: IntFilter<"Ayah"> | number
    arabicText?: StringFilter<"Ayah"> | string
    uzbekTextInLatin?: StringFilter<"Ayah"> | string
    uzbekTextInCyrillic?: StringFilter<"Ayah"> | string
    qcfText?: StringFilter<"Ayah"> | string
    surahId?: StringFilter<"Ayah"> | string
    pageNumber?: IntFilter<"Ayah"> | number
    createdAt?: DateTimeFilter<"Ayah"> | Date | string
    updatedAt?: DateTimeFilter<"Ayah"> | Date | string
  }

  export type SurahCreateWithoutAyahsInput = {
    id?: string
    name: string
    arabicName: string
    qfcName: string
    uzbekName: string
    uzbekNameTranslation?: string | null
    number: number
    pageNumber?: number
    totalAyahs: number
    revelationType: $Enums.SurahRevelationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurahUncheckedCreateWithoutAyahsInput = {
    id?: string
    name: string
    arabicName: string
    qfcName: string
    uzbekName: string
    uzbekNameTranslation?: string | null
    number: number
    pageNumber?: number
    totalAyahs: number
    revelationType: $Enums.SurahRevelationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurahCreateOrConnectWithoutAyahsInput = {
    where: SurahWhereUniqueInput
    create: XOR<SurahCreateWithoutAyahsInput, SurahUncheckedCreateWithoutAyahsInput>
  }

  export type TafseerAyahCreateWithoutAyahInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tafseer: TafseerCreateNestedOneWithoutAyahsInput
  }

  export type TafseerAyahUncheckedCreateWithoutAyahInput = {
    id?: string
    text: string
    tafseerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerAyahCreateOrConnectWithoutAyahInput = {
    where: TafseerAyahWhereUniqueInput
    create: XOR<TafseerAyahCreateWithoutAyahInput, TafseerAyahUncheckedCreateWithoutAyahInput>
  }

  export type TafseerAyahCreateManyAyahInputEnvelope = {
    data: TafseerAyahCreateManyAyahInput | TafseerAyahCreateManyAyahInput[]
    skipDuplicates?: boolean
  }

  export type SurahUpsertWithoutAyahsInput = {
    update: XOR<SurahUpdateWithoutAyahsInput, SurahUncheckedUpdateWithoutAyahsInput>
    create: XOR<SurahCreateWithoutAyahsInput, SurahUncheckedCreateWithoutAyahsInput>
    where?: SurahWhereInput
  }

  export type SurahUpdateToOneWithWhereWithoutAyahsInput = {
    where?: SurahWhereInput
    data: XOR<SurahUpdateWithoutAyahsInput, SurahUncheckedUpdateWithoutAyahsInput>
  }

  export type SurahUpdateWithoutAyahsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    qfcName?: StringFieldUpdateOperationsInput | string
    uzbekName?: StringFieldUpdateOperationsInput | string
    uzbekNameTranslation?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    pageNumber?: IntFieldUpdateOperationsInput | number
    totalAyahs?: IntFieldUpdateOperationsInput | number
    revelationType?: EnumSurahRevelationTypeFieldUpdateOperationsInput | $Enums.SurahRevelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurahUncheckedUpdateWithoutAyahsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    qfcName?: StringFieldUpdateOperationsInput | string
    uzbekName?: StringFieldUpdateOperationsInput | string
    uzbekNameTranslation?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
    pageNumber?: IntFieldUpdateOperationsInput | number
    totalAyahs?: IntFieldUpdateOperationsInput | number
    revelationType?: EnumSurahRevelationTypeFieldUpdateOperationsInput | $Enums.SurahRevelationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahUpsertWithWhereUniqueWithoutAyahInput = {
    where: TafseerAyahWhereUniqueInput
    update: XOR<TafseerAyahUpdateWithoutAyahInput, TafseerAyahUncheckedUpdateWithoutAyahInput>
    create: XOR<TafseerAyahCreateWithoutAyahInput, TafseerAyahUncheckedCreateWithoutAyahInput>
  }

  export type TafseerAyahUpdateWithWhereUniqueWithoutAyahInput = {
    where: TafseerAyahWhereUniqueInput
    data: XOR<TafseerAyahUpdateWithoutAyahInput, TafseerAyahUncheckedUpdateWithoutAyahInput>
  }

  export type TafseerAyahUpdateManyWithWhereWithoutAyahInput = {
    where: TafseerAyahScalarWhereInput
    data: XOR<TafseerAyahUpdateManyMutationInput, TafseerAyahUncheckedUpdateManyWithoutAyahInput>
  }

  export type AyahCreateWithoutTafseersInput = {
    id?: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    pageNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    surah: SurahCreateNestedOneWithoutAyahsInput
  }

  export type AyahUncheckedCreateWithoutTafseersInput = {
    id?: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    surahId: string
    pageNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AyahCreateOrConnectWithoutTafseersInput = {
    where: AyahWhereUniqueInput
    create: XOR<AyahCreateWithoutTafseersInput, AyahUncheckedCreateWithoutTafseersInput>
  }

  export type TafseerCreateWithoutAyahsInput = {
    id?: string
    name: string
    arabicName: string
    text: string
    filePath?: string | null
    language?: $Enums.TafseerLanguage
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutTafseersInput
  }

  export type TafseerUncheckedCreateWithoutAyahsInput = {
    id?: string
    name: string
    arabicName: string
    text: string
    filePath?: string | null
    language?: $Enums.TafseerLanguage
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerCreateOrConnectWithoutAyahsInput = {
    where: TafseerWhereUniqueInput
    create: XOR<TafseerCreateWithoutAyahsInput, TafseerUncheckedCreateWithoutAyahsInput>
  }

  export type AyahUpsertWithoutTafseersInput = {
    update: XOR<AyahUpdateWithoutTafseersInput, AyahUncheckedUpdateWithoutTafseersInput>
    create: XOR<AyahCreateWithoutTafseersInput, AyahUncheckedCreateWithoutTafseersInput>
    where?: AyahWhereInput
  }

  export type AyahUpdateToOneWithWhereWithoutTafseersInput = {
    where?: AyahWhereInput
    data: XOR<AyahUpdateWithoutTafseersInput, AyahUncheckedUpdateWithoutTafseersInput>
  }

  export type AyahUpdateWithoutTafseersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surah?: SurahUpdateOneRequiredWithoutAyahsNestedInput
  }

  export type AyahUncheckedUpdateWithoutTafseersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    surahId?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerUpsertWithoutAyahsInput = {
    update: XOR<TafseerUpdateWithoutAyahsInput, TafseerUncheckedUpdateWithoutAyahsInput>
    create: XOR<TafseerCreateWithoutAyahsInput, TafseerUncheckedCreateWithoutAyahsInput>
    where?: TafseerWhereInput
  }

  export type TafseerUpdateToOneWithWhereWithoutAyahsInput = {
    where?: TafseerWhereInput
    data: XOR<TafseerUpdateWithoutAyahsInput, TafseerUncheckedUpdateWithoutAyahsInput>
  }

  export type TafseerUpdateWithoutAyahsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutTafseersNestedInput
  }

  export type TafseerUncheckedUpdateWithoutAyahsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerCreateManyAuthorInput = {
    id?: string
    name: string
    arabicName: string
    text: string
    filePath?: string | null
    language?: $Enums.TafseerLanguage
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayahs?: TafseerAyahUpdateManyWithoutTafseerNestedInput
  }

  export type TafseerUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayahs?: TafseerAyahUncheckedUpdateManyWithoutTafseerNestedInput
  }

  export type TafseerUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arabicName?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumTafseerLanguageFieldUpdateOperationsInput | $Enums.TafseerLanguage
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahCreateManyTafseerInput = {
    id?: string
    text: string
    ayahId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerAyahUpdateWithoutTafseerInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayah?: AyahUpdateOneRequiredWithoutTafseersNestedInput
  }

  export type TafseerAyahUncheckedUpdateWithoutTafseerInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ayahId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahUncheckedUpdateManyWithoutTafseerInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ayahId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AyahCreateManySurahInput = {
    id?: string
    number: number
    arabicText: string
    uzbekTextInLatin: string
    uzbekTextInCyrillic: string
    qcfText: string
    pageNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AyahUpdateWithoutSurahInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tafseers?: TafseerAyahUpdateManyWithoutAyahNestedInput
  }

  export type AyahUncheckedUpdateWithoutSurahInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tafseers?: TafseerAyahUncheckedUpdateManyWithoutAyahNestedInput
  }

  export type AyahUncheckedUpdateManyWithoutSurahInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    arabicText?: StringFieldUpdateOperationsInput | string
    uzbekTextInLatin?: StringFieldUpdateOperationsInput | string
    uzbekTextInCyrillic?: StringFieldUpdateOperationsInput | string
    qcfText?: StringFieldUpdateOperationsInput | string
    pageNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahCreateManyAyahInput = {
    id?: string
    text: string
    tafseerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TafseerAyahUpdateWithoutAyahInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tafseer?: TafseerUpdateOneRequiredWithoutAyahsNestedInput
  }

  export type TafseerAyahUncheckedUpdateWithoutAyahInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    tafseerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TafseerAyahUncheckedUpdateManyWithoutAyahInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    tafseerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}