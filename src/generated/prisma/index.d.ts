
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
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model SensorData
 * 
 */
export type SensorData = $Result.DefaultSelection<Prisma.$SensorDataPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  STATION_MANAGER: 'STATION_MANAGER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StationStatus: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  MAINTENANCE: 'MAINTENANCE'
};

export type StationStatus = (typeof StationStatus)[keyof typeof StationStatus]


export const SensorStatus: {
  NORMAL: 'NORMAL',
  WARNING: 'WARNING',
  CRITICAL: 'CRITICAL'
};

export type SensorStatus = (typeof SensorStatus)[keyof typeof SensorStatus]


export const AlertType: {
  WARNING: 'WARNING',
  CRITICAL: 'CRITICAL',
  SYSTEM: 'SYSTEM'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]


export const AlertStatus: {
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED',
  IGNORED: 'IGNORED'
};

export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StationStatus = $Enums.StationStatus

export const StationStatus: typeof $Enums.StationStatus

export type SensorStatus = $Enums.SensorStatus

export const SensorStatus: typeof $Enums.SensorStatus

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

export type AlertStatus = $Enums.AlertStatus

export const AlertStatus: typeof $Enums.AlertStatus

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensorData`: Exposes CRUD operations for the **SensorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorData
    * const sensorData = await prisma.sensorData.findMany()
    * ```
    */
  get sensorData(): Prisma.SensorDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Card: 'Card',
    Station: 'Station',
    SensorData: 'SensorData',
    Alert: 'Alert'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "card" | "station" | "sensorData" | "alert"
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
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      SensorData: {
        payload: Prisma.$SensorDataPayload<ExtArgs>
        fields: Prisma.SensorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          findFirst: {
            args: Prisma.SensorDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          findMany: {
            args: Prisma.SensorDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>[]
          }
          create: {
            args: Prisma.SensorDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          createMany: {
            args: Prisma.SensorDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>[]
          }
          delete: {
            args: Prisma.SensorDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          update: {
            args: Prisma.SensorDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          deleteMany: {
            args: Prisma.SensorDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>[]
          }
          upsert: {
            args: Prisma.SensorDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          aggregate: {
            args: Prisma.SensorDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensorData>
          }
          groupBy: {
            args: Prisma.SensorDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorDataCountArgs<ExtArgs>
            result: $Utils.Optional<SensorDataCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
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
    card?: CardOmit
    station?: StationOmit
    sensorData?: SensorDataOmit
    alert?: AlertOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resolvedAlerts: number
    cards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resolvedAlerts?: boolean | UserCountOutputTypeCountResolvedAlertsArgs
    cards?: boolean | UserCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResolvedAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    sensorData: number
    alerts: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensorData?: boolean | StationCountOutputTypeCountSensorDataArgs
    alerts?: boolean | StationCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountSensorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorDataWhereInput
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type SensorDataCountOutputType
   */

  export type SensorDataCountOutputType = {
    alerts: number
  }

  export type SensorDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | SensorDataCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * SensorDataCountOutputType without action
   */
  export type SensorDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorDataCountOutputType
     */
    select?: SensorDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SensorDataCountOutputType without action
   */
  export type SensorDataCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAlerts?: boolean | User$resolvedAlertsArgs<ExtArgs>
    cards?: boolean | User$cardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resolvedAlerts?: boolean | User$resolvedAlertsArgs<ExtArgs>
    cards?: boolean | User$cardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resolvedAlerts: Prisma.$AlertPayload<ExtArgs>[]
      cards: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: $Enums.Role
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

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resolvedAlerts<T extends User$resolvedAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$resolvedAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cards<T extends User$cardsArgs<ExtArgs> = {}>(args?: Subset<T, User$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.resolvedAlerts
   */
  export type User$resolvedAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * User.cards
   */
  export type User$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
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
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CardSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CardMinAggregateOutputType = {
    id: number | null
    uid: string | null
    userId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    userId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    uid: number
    userId: number
    description: number
    createdAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CardSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    uid?: true
    userId?: true
    description?: true
    createdAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    uid?: true
    userId?: true
    description?: true
    createdAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    uid?: true
    userId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: number
    uid: string
    userId: number
    description: string | null
    createdAt: Date
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    userId?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    userId?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    userId?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    uid?: boolean
    userId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uid" | "userId" | "description" | "createdAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      userId: number
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'Int'>
    readonly uid: FieldRef<"Card", 'String'>
    readonly userId: FieldRef<"Card", 'Int'>
    readonly description: FieldRef<"Card", 'String'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    description: string | null
    apiKey: string | null
    status: $Enums.StationStatus | null
    lastReading: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    description: string | null
    apiKey: string | null
    status: $Enums.StationStatus | null
    lastReading: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    name: number
    location: number
    description: number
    apiKey: number
    status: number
    lastReading: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    apiKey?: true
    status?: true
    lastReading?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    apiKey?: true
    status?: true
    lastReading?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    apiKey?: true
    status?: true
    lastReading?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    name: string
    location: string
    description: string | null
    apiKey: string
    status: $Enums.StationStatus
    lastReading: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    apiKey?: boolean
    status?: boolean
    lastReading?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sensorData?: boolean | Station$sensorDataArgs<ExtArgs>
    alerts?: boolean | Station$alertsArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    apiKey?: boolean
    status?: boolean
    lastReading?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["station"]>

  export type StationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    apiKey?: boolean
    status?: boolean
    lastReading?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["station"]>

  export type StationSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    apiKey?: boolean
    status?: boolean
    lastReading?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "description" | "apiKey" | "status" | "lastReading" | "createdAt" | "updatedAt", ExtArgs["result"]["station"]>
  export type StationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensorData?: boolean | Station$sensorDataArgs<ExtArgs>
    alerts?: boolean | Station$alertsArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {
      sensorData: Prisma.$SensorDataPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      description: string | null
      apiKey: string
      status: $Enums.StationStatus
      lastReading: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["station"]>
    composites: {}
  }

  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StationFindUniqueArgs>(args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Station that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs>(args: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StationFindFirstArgs>(args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs>(args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StationFindManyArgs>(args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
     */
    create<T extends StationCreateArgs>(args: SelectSubset<T, StationCreateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stations.
     * @param {StationCreateManyArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StationCreateManyArgs>(args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stations and returns the data saved in the database.
     * @param {StationCreateManyAndReturnArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StationCreateManyAndReturnArgs>(args?: SelectSubset<T, StationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
     */
    delete<T extends StationDeleteArgs>(args: SelectSubset<T, StationDeleteArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StationUpdateArgs>(args: SelectSubset<T, StationUpdateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StationDeleteManyArgs>(args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StationUpdateManyArgs>(args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations and returns the data updated in the database.
     * @param {StationUpdateManyAndReturnArgs} args - Arguments to update many Stations.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.updateManyAndReturn({
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
    updateManyAndReturn<T extends StationUpdateManyAndReturnArgs>(args: SelectSubset<T, StationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
     */
    upsert<T extends StationUpsertArgs>(args: SelectSubset<T, StationUpsertArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
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
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensorData<T extends Station$sensorDataArgs<ExtArgs> = {}>(args?: Subset<T, Station$sensorDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Station$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Station$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Station model
   */
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'Int'>
    readonly name: FieldRef<"Station", 'String'>
    readonly location: FieldRef<"Station", 'String'>
    readonly description: FieldRef<"Station", 'String'>
    readonly apiKey: FieldRef<"Station", 'String'>
    readonly status: FieldRef<"Station", 'StationStatus'>
    readonly lastReading: FieldRef<"Station", 'DateTime'>
    readonly createdAt: FieldRef<"Station", 'DateTime'>
    readonly updatedAt: FieldRef<"Station", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }

  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station createManyAndReturn
   */
  export type StationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
  }

  /**
   * Station updateManyAndReturn
   */
  export type StationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
  }

  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }

  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to delete.
     */
    limit?: number
  }

  /**
   * Station.sensorData
   */
  export type Station$sensorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    where?: SensorDataWhereInput
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    cursor?: SensorDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorDataScalarFieldEnum | SensorDataScalarFieldEnum[]
  }

  /**
   * Station.alerts
   */
  export type Station$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
  }


  /**
   * Model SensorData
   */

  export type AggregateSensorData = {
    _count: SensorDataCountAggregateOutputType | null
    _avg: SensorDataAvgAggregateOutputType | null
    _sum: SensorDataSumAggregateOutputType | null
    _min: SensorDataMinAggregateOutputType | null
    _max: SensorDataMaxAggregateOutputType | null
  }

  export type SensorDataAvgAggregateOutputType = {
    id: number | null
    stationId: number | null
    turbidity: number | null
    tds: number | null
    flowRate: number | null
    totalFlow: number | null
  }

  export type SensorDataSumAggregateOutputType = {
    id: number | null
    stationId: number | null
    turbidity: number | null
    tds: number | null
    flowRate: number | null
    totalFlow: number | null
  }

  export type SensorDataMinAggregateOutputType = {
    id: number | null
    stationId: number | null
    timestamp: Date | null
    turbidity: number | null
    turbidityUnit: string | null
    turbidityStatus: $Enums.SensorStatus | null
    tds: number | null
    tdsUnit: string | null
    tdsStatus: $Enums.SensorStatus | null
    flowRate: number | null
    flowRateUnit: string | null
    flowRateStatus: $Enums.SensorStatus | null
    totalFlow: number | null
    totalFlowUnit: string | null
  }

  export type SensorDataMaxAggregateOutputType = {
    id: number | null
    stationId: number | null
    timestamp: Date | null
    turbidity: number | null
    turbidityUnit: string | null
    turbidityStatus: $Enums.SensorStatus | null
    tds: number | null
    tdsUnit: string | null
    tdsStatus: $Enums.SensorStatus | null
    flowRate: number | null
    flowRateUnit: string | null
    flowRateStatus: $Enums.SensorStatus | null
    totalFlow: number | null
    totalFlowUnit: string | null
  }

  export type SensorDataCountAggregateOutputType = {
    id: number
    stationId: number
    timestamp: number
    turbidity: number
    turbidityUnit: number
    turbidityStatus: number
    tds: number
    tdsUnit: number
    tdsStatus: number
    flowRate: number
    flowRateUnit: number
    flowRateStatus: number
    totalFlow: number
    totalFlowUnit: number
    _all: number
  }


  export type SensorDataAvgAggregateInputType = {
    id?: true
    stationId?: true
    turbidity?: true
    tds?: true
    flowRate?: true
    totalFlow?: true
  }

  export type SensorDataSumAggregateInputType = {
    id?: true
    stationId?: true
    turbidity?: true
    tds?: true
    flowRate?: true
    totalFlow?: true
  }

  export type SensorDataMinAggregateInputType = {
    id?: true
    stationId?: true
    timestamp?: true
    turbidity?: true
    turbidityUnit?: true
    turbidityStatus?: true
    tds?: true
    tdsUnit?: true
    tdsStatus?: true
    flowRate?: true
    flowRateUnit?: true
    flowRateStatus?: true
    totalFlow?: true
    totalFlowUnit?: true
  }

  export type SensorDataMaxAggregateInputType = {
    id?: true
    stationId?: true
    timestamp?: true
    turbidity?: true
    turbidityUnit?: true
    turbidityStatus?: true
    tds?: true
    tdsUnit?: true
    tdsStatus?: true
    flowRate?: true
    flowRateUnit?: true
    flowRateStatus?: true
    totalFlow?: true
    totalFlowUnit?: true
  }

  export type SensorDataCountAggregateInputType = {
    id?: true
    stationId?: true
    timestamp?: true
    turbidity?: true
    turbidityUnit?: true
    turbidityStatus?: true
    tds?: true
    tdsUnit?: true
    tdsStatus?: true
    flowRate?: true
    flowRateUnit?: true
    flowRateStatus?: true
    totalFlow?: true
    totalFlowUnit?: true
    _all?: true
  }

  export type SensorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorData to aggregate.
     */
    where?: SensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorData to fetch.
     */
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorData
    **/
    _count?: true | SensorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorDataMaxAggregateInputType
  }

  export type GetSensorDataAggregateType<T extends SensorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorData[P]>
      : GetScalarType<T[P], AggregateSensorData[P]>
  }




  export type SensorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorDataWhereInput
    orderBy?: SensorDataOrderByWithAggregationInput | SensorDataOrderByWithAggregationInput[]
    by: SensorDataScalarFieldEnum[] | SensorDataScalarFieldEnum
    having?: SensorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorDataCountAggregateInputType | true
    _avg?: SensorDataAvgAggregateInputType
    _sum?: SensorDataSumAggregateInputType
    _min?: SensorDataMinAggregateInputType
    _max?: SensorDataMaxAggregateInputType
  }

  export type SensorDataGroupByOutputType = {
    id: number
    stationId: number
    timestamp: Date
    turbidity: number
    turbidityUnit: string
    turbidityStatus: $Enums.SensorStatus
    tds: number
    tdsUnit: string
    tdsStatus: $Enums.SensorStatus
    flowRate: number
    flowRateUnit: string
    flowRateStatus: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit: string
    _count: SensorDataCountAggregateOutputType | null
    _avg: SensorDataAvgAggregateOutputType | null
    _sum: SensorDataSumAggregateOutputType | null
    _min: SensorDataMinAggregateOutputType | null
    _max: SensorDataMaxAggregateOutputType | null
  }

  type GetSensorDataGroupByPayload<T extends SensorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorDataGroupByOutputType[P]>
            : GetScalarType<T[P], SensorDataGroupByOutputType[P]>
        }
      >
    >


  export type SensorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    timestamp?: boolean
    turbidity?: boolean
    turbidityUnit?: boolean
    turbidityStatus?: boolean
    tds?: boolean
    tdsUnit?: boolean
    tdsStatus?: boolean
    flowRate?: boolean
    flowRateUnit?: boolean
    flowRateStatus?: boolean
    totalFlow?: boolean
    totalFlowUnit?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
    alerts?: boolean | SensorData$alertsArgs<ExtArgs>
    _count?: boolean | SensorDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorData"]>

  export type SensorDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    timestamp?: boolean
    turbidity?: boolean
    turbidityUnit?: boolean
    turbidityStatus?: boolean
    tds?: boolean
    tdsUnit?: boolean
    tdsStatus?: boolean
    flowRate?: boolean
    flowRateUnit?: boolean
    flowRateStatus?: boolean
    totalFlow?: boolean
    totalFlowUnit?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorData"]>

  export type SensorDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    timestamp?: boolean
    turbidity?: boolean
    turbidityUnit?: boolean
    turbidityStatus?: boolean
    tds?: boolean
    tdsUnit?: boolean
    tdsStatus?: boolean
    flowRate?: boolean
    flowRateUnit?: boolean
    flowRateStatus?: boolean
    totalFlow?: boolean
    totalFlowUnit?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorData"]>

  export type SensorDataSelectScalar = {
    id?: boolean
    stationId?: boolean
    timestamp?: boolean
    turbidity?: boolean
    turbidityUnit?: boolean
    turbidityStatus?: boolean
    tds?: boolean
    tdsUnit?: boolean
    tdsStatus?: boolean
    flowRate?: boolean
    flowRateUnit?: boolean
    flowRateStatus?: boolean
    totalFlow?: boolean
    totalFlowUnit?: boolean
  }

  export type SensorDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stationId" | "timestamp" | "turbidity" | "turbidityUnit" | "turbidityStatus" | "tds" | "tdsUnit" | "tdsStatus" | "flowRate" | "flowRateUnit" | "flowRateStatus" | "totalFlow" | "totalFlowUnit", ExtArgs["result"]["sensorData"]>
  export type SensorDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
    alerts?: boolean | SensorData$alertsArgs<ExtArgs>
    _count?: boolean | SensorDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SensorDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type SensorDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }

  export type $SensorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SensorData"
    objects: {
      station: Prisma.$StationPayload<ExtArgs>
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stationId: number
      timestamp: Date
      turbidity: number
      turbidityUnit: string
      turbidityStatus: $Enums.SensorStatus
      tds: number
      tdsUnit: string
      tdsStatus: $Enums.SensorStatus
      flowRate: number
      flowRateUnit: string
      flowRateStatus: $Enums.SensorStatus
      totalFlow: number
      totalFlowUnit: string
    }, ExtArgs["result"]["sensorData"]>
    composites: {}
  }

  type SensorDataGetPayload<S extends boolean | null | undefined | SensorDataDefaultArgs> = $Result.GetResult<Prisma.$SensorDataPayload, S>

  type SensorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorDataCountAggregateInputType | true
    }

  export interface SensorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SensorData'], meta: { name: 'SensorData' } }
    /**
     * Find zero or one SensorData that matches the filter.
     * @param {SensorDataFindUniqueArgs} args - Arguments to find a SensorData
     * @example
     * // Get one SensorData
     * const sensorData = await prisma.sensorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorDataFindUniqueArgs>(args: SelectSubset<T, SensorDataFindUniqueArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SensorData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorDataFindUniqueOrThrowArgs} args - Arguments to find a SensorData
     * @example
     * // Get one SensorData
     * const sensorData = await prisma.sensorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorDataFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataFindFirstArgs} args - Arguments to find a SensorData
     * @example
     * // Get one SensorData
     * const sensorData = await prisma.sensorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorDataFindFirstArgs>(args?: SelectSubset<T, SensorDataFindFirstArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataFindFirstOrThrowArgs} args - Arguments to find a SensorData
     * @example
     * // Get one SensorData
     * const sensorData = await prisma.sensorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorDataFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorData
     * const sensorData = await prisma.sensorData.findMany()
     * 
     * // Get first 10 SensorData
     * const sensorData = await prisma.sensorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorDataWithIdOnly = await prisma.sensorData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorDataFindManyArgs>(args?: SelectSubset<T, SensorDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SensorData.
     * @param {SensorDataCreateArgs} args - Arguments to create a SensorData.
     * @example
     * // Create one SensorData
     * const SensorData = await prisma.sensorData.create({
     *   data: {
     *     // ... data to create a SensorData
     *   }
     * })
     * 
     */
    create<T extends SensorDataCreateArgs>(args: SelectSubset<T, SensorDataCreateArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SensorData.
     * @param {SensorDataCreateManyArgs} args - Arguments to create many SensorData.
     * @example
     * // Create many SensorData
     * const sensorData = await prisma.sensorData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorDataCreateManyArgs>(args?: SelectSubset<T, SensorDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SensorData and returns the data saved in the database.
     * @param {SensorDataCreateManyAndReturnArgs} args - Arguments to create many SensorData.
     * @example
     * // Create many SensorData
     * const sensorData = await prisma.sensorData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SensorData and only return the `id`
     * const sensorDataWithIdOnly = await prisma.sensorData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorDataCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SensorData.
     * @param {SensorDataDeleteArgs} args - Arguments to delete one SensorData.
     * @example
     * // Delete one SensorData
     * const SensorData = await prisma.sensorData.delete({
     *   where: {
     *     // ... filter to delete one SensorData
     *   }
     * })
     * 
     */
    delete<T extends SensorDataDeleteArgs>(args: SelectSubset<T, SensorDataDeleteArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SensorData.
     * @param {SensorDataUpdateArgs} args - Arguments to update one SensorData.
     * @example
     * // Update one SensorData
     * const sensorData = await prisma.sensorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorDataUpdateArgs>(args: SelectSubset<T, SensorDataUpdateArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SensorData.
     * @param {SensorDataDeleteManyArgs} args - Arguments to filter SensorData to delete.
     * @example
     * // Delete a few SensorData
     * const { count } = await prisma.sensorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorDataDeleteManyArgs>(args?: SelectSubset<T, SensorDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorData
     * const sensorData = await prisma.sensorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorDataUpdateManyArgs>(args: SelectSubset<T, SensorDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorData and returns the data updated in the database.
     * @param {SensorDataUpdateManyAndReturnArgs} args - Arguments to update many SensorData.
     * @example
     * // Update many SensorData
     * const sensorData = await prisma.sensorData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SensorData and only return the `id`
     * const sensorDataWithIdOnly = await prisma.sensorData.updateManyAndReturn({
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
    updateManyAndReturn<T extends SensorDataUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SensorData.
     * @param {SensorDataUpsertArgs} args - Arguments to update or create a SensorData.
     * @example
     * // Update or create a SensorData
     * const sensorData = await prisma.sensorData.upsert({
     *   create: {
     *     // ... data to create a SensorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorData we want to update
     *   }
     * })
     */
    upsert<T extends SensorDataUpsertArgs>(args: SelectSubset<T, SensorDataUpsertArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataCountArgs} args - Arguments to filter SensorData to count.
     * @example
     * // Count the number of SensorData
     * const count = await prisma.sensorData.count({
     *   where: {
     *     // ... the filter for the SensorData we want to count
     *   }
     * })
    **/
    count<T extends SensorDataCountArgs>(
      args?: Subset<T, SensorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorDataAggregateArgs>(args: Subset<T, SensorDataAggregateArgs>): Prisma.PrismaPromise<GetSensorDataAggregateType<T>>

    /**
     * Group by SensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataGroupByArgs} args - Group by arguments.
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
      T extends SensorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorDataGroupByArgs['orderBy'] }
        : { orderBy?: SensorDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SensorData model
   */
  readonly fields: SensorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alerts<T extends SensorData$alertsArgs<ExtArgs> = {}>(args?: Subset<T, SensorData$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SensorData model
   */
  interface SensorDataFieldRefs {
    readonly id: FieldRef<"SensorData", 'Int'>
    readonly stationId: FieldRef<"SensorData", 'Int'>
    readonly timestamp: FieldRef<"SensorData", 'DateTime'>
    readonly turbidity: FieldRef<"SensorData", 'Float'>
    readonly turbidityUnit: FieldRef<"SensorData", 'String'>
    readonly turbidityStatus: FieldRef<"SensorData", 'SensorStatus'>
    readonly tds: FieldRef<"SensorData", 'Float'>
    readonly tdsUnit: FieldRef<"SensorData", 'String'>
    readonly tdsStatus: FieldRef<"SensorData", 'SensorStatus'>
    readonly flowRate: FieldRef<"SensorData", 'Float'>
    readonly flowRateUnit: FieldRef<"SensorData", 'String'>
    readonly flowRateStatus: FieldRef<"SensorData", 'SensorStatus'>
    readonly totalFlow: FieldRef<"SensorData", 'Float'>
    readonly totalFlowUnit: FieldRef<"SensorData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SensorData findUnique
   */
  export type SensorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where: SensorDataWhereUniqueInput
  }

  /**
   * SensorData findUniqueOrThrow
   */
  export type SensorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where: SensorDataWhereUniqueInput
  }

  /**
   * SensorData findFirst
   */
  export type SensorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where?: SensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorData to fetch.
     */
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorData.
     */
    cursor?: SensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorData.
     */
    distinct?: SensorDataScalarFieldEnum | SensorDataScalarFieldEnum[]
  }

  /**
   * SensorData findFirstOrThrow
   */
  export type SensorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where?: SensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorData to fetch.
     */
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorData.
     */
    cursor?: SensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorData.
     */
    distinct?: SensorDataScalarFieldEnum | SensorDataScalarFieldEnum[]
  }

  /**
   * SensorData findMany
   */
  export type SensorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where?: SensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorData to fetch.
     */
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorData.
     */
    cursor?: SensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorData.
     */
    skip?: number
    distinct?: SensorDataScalarFieldEnum | SensorDataScalarFieldEnum[]
  }

  /**
   * SensorData create
   */
  export type SensorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SensorData.
     */
    data: XOR<SensorDataCreateInput, SensorDataUncheckedCreateInput>
  }

  /**
   * SensorData createMany
   */
  export type SensorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorData.
     */
    data: SensorDataCreateManyInput | SensorDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SensorData createManyAndReturn
   */
  export type SensorDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * The data used to create many SensorData.
     */
    data: SensorDataCreateManyInput | SensorDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorData update
   */
  export type SensorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SensorData.
     */
    data: XOR<SensorDataUpdateInput, SensorDataUncheckedUpdateInput>
    /**
     * Choose, which SensorData to update.
     */
    where: SensorDataWhereUniqueInput
  }

  /**
   * SensorData updateMany
   */
  export type SensorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorData.
     */
    data: XOR<SensorDataUpdateManyMutationInput, SensorDataUncheckedUpdateManyInput>
    /**
     * Filter which SensorData to update
     */
    where?: SensorDataWhereInput
    /**
     * Limit how many SensorData to update.
     */
    limit?: number
  }

  /**
   * SensorData updateManyAndReturn
   */
  export type SensorDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * The data used to update SensorData.
     */
    data: XOR<SensorDataUpdateManyMutationInput, SensorDataUncheckedUpdateManyInput>
    /**
     * Filter which SensorData to update
     */
    where?: SensorDataWhereInput
    /**
     * Limit how many SensorData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorData upsert
   */
  export type SensorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SensorData to update in case it exists.
     */
    where: SensorDataWhereUniqueInput
    /**
     * In case the SensorData found by the `where` argument doesn't exist, create a new SensorData with this data.
     */
    create: XOR<SensorDataCreateInput, SensorDataUncheckedCreateInput>
    /**
     * In case the SensorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorDataUpdateInput, SensorDataUncheckedUpdateInput>
  }

  /**
   * SensorData delete
   */
  export type SensorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter which SensorData to delete.
     */
    where: SensorDataWhereUniqueInput
  }

  /**
   * SensorData deleteMany
   */
  export type SensorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorData to delete
     */
    where?: SensorDataWhereInput
    /**
     * Limit how many SensorData to delete.
     */
    limit?: number
  }

  /**
   * SensorData.alerts
   */
  export type SensorData$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * SensorData without action
   */
  export type SensorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    id: number | null
    stationId: number | null
    sensorDataId: number | null
    resolvedById: number | null
  }

  export type AlertSumAggregateOutputType = {
    id: number | null
    stationId: number | null
    sensorDataId: number | null
    resolvedById: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: number | null
    stationId: number | null
    sensorDataId: number | null
    type: $Enums.AlertType | null
    message: string | null
    status: $Enums.AlertStatus | null
    createdAt: Date | null
    resolvedAt: Date | null
    resolvedById: number | null
  }

  export type AlertMaxAggregateOutputType = {
    id: number | null
    stationId: number | null
    sensorDataId: number | null
    type: $Enums.AlertType | null
    message: string | null
    status: $Enums.AlertStatus | null
    createdAt: Date | null
    resolvedAt: Date | null
    resolvedById: number | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    stationId: number
    sensorDataId: number
    type: number
    message: number
    status: number
    createdAt: number
    resolvedAt: number
    resolvedById: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    id?: true
    stationId?: true
    sensorDataId?: true
    resolvedById?: true
  }

  export type AlertSumAggregateInputType = {
    id?: true
    stationId?: true
    sensorDataId?: true
    resolvedById?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    stationId?: true
    sensorDataId?: true
    type?: true
    message?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    resolvedById?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    stationId?: true
    sensorDataId?: true
    type?: true
    message?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    resolvedById?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    stationId?: true
    sensorDataId?: true
    type?: true
    message?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    resolvedById?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: number
    stationId: number
    sensorDataId: number | null
    type: $Enums.AlertType
    message: string
    status: $Enums.AlertStatus
    createdAt: Date
    resolvedAt: Date | null
    resolvedById: number | null
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    sensorDataId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    resolvedById?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
    sensorData?: boolean | Alert$sensorDataArgs<ExtArgs>
    resolvedBy?: boolean | Alert$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    sensorDataId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    resolvedById?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
    sensorData?: boolean | Alert$sensorDataArgs<ExtArgs>
    resolvedBy?: boolean | Alert$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    sensorDataId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    resolvedById?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
    sensorData?: boolean | Alert$sensorDataArgs<ExtArgs>
    resolvedBy?: boolean | Alert$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    stationId?: boolean
    sensorDataId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    resolvedById?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stationId" | "sensorDataId" | "type" | "message" | "status" | "createdAt" | "resolvedAt" | "resolvedById", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
    sensorData?: boolean | Alert$sensorDataArgs<ExtArgs>
    resolvedBy?: boolean | Alert$resolvedByArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
    sensorData?: boolean | Alert$sensorDataArgs<ExtArgs>
    resolvedBy?: boolean | Alert$resolvedByArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
    sensorData?: boolean | Alert$sensorDataArgs<ExtArgs>
    resolvedBy?: boolean | Alert$resolvedByArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      station: Prisma.$StationPayload<ExtArgs>
      sensorData: Prisma.$SensorDataPayload<ExtArgs> | null
      resolvedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stationId: number
      sensorDataId: number | null
      type: $Enums.AlertType
      message: string
      status: $Enums.AlertStatus
      createdAt: Date
      resolvedAt: Date | null
      resolvedById: number | null
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sensorData<T extends Alert$sensorDataArgs<ExtArgs> = {}>(args?: Subset<T, Alert$sensorDataArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    resolvedBy<T extends Alert$resolvedByArgs<ExtArgs> = {}>(args?: Subset<T, Alert$resolvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'Int'>
    readonly stationId: FieldRef<"Alert", 'Int'>
    readonly sensorDataId: FieldRef<"Alert", 'Int'>
    readonly type: FieldRef<"Alert", 'AlertType'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly status: FieldRef<"Alert", 'AlertStatus'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly resolvedAt: FieldRef<"Alert", 'DateTime'>
    readonly resolvedById: FieldRef<"Alert", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert.sensorData
   */
  export type Alert$sensorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    where?: SensorDataWhereInput
  }

  /**
   * Alert.resolvedBy
   */
  export type Alert$resolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
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
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    userId: 'userId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const StationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    description: 'description',
    apiKey: 'apiKey',
    status: 'status',
    lastReading: 'lastReading',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const SensorDataScalarFieldEnum: {
    id: 'id',
    stationId: 'stationId',
    timestamp: 'timestamp',
    turbidity: 'turbidity',
    turbidityUnit: 'turbidityUnit',
    turbidityStatus: 'turbidityStatus',
    tds: 'tds',
    tdsUnit: 'tdsUnit',
    tdsStatus: 'tdsStatus',
    flowRate: 'flowRate',
    flowRateUnit: 'flowRateUnit',
    flowRateStatus: 'flowRateStatus',
    totalFlow: 'totalFlow',
    totalFlowUnit: 'totalFlowUnit'
  };

  export type SensorDataScalarFieldEnum = (typeof SensorDataScalarFieldEnum)[keyof typeof SensorDataScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    stationId: 'stationId',
    sensorDataId: 'sensorDataId',
    type: 'type',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt',
    resolvedById: 'resolvedById'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StationStatus'
   */
  export type EnumStationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StationStatus'>
    


  /**
   * Reference to a field of type 'StationStatus[]'
   */
  export type ListEnumStationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SensorStatus'
   */
  export type EnumSensorStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SensorStatus'>
    


  /**
   * Reference to a field of type 'SensorStatus[]'
   */
  export type ListEnumSensorStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SensorStatus[]'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    


  /**
   * Reference to a field of type 'AlertStatus'
   */
  export type EnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus'>
    


  /**
   * Reference to a field of type 'AlertStatus[]'
   */
  export type ListEnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resolvedAlerts?: AlertListRelationFilter
    cards?: CardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAlerts?: AlertOrderByRelationAggregateInput
    cards?: CardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resolvedAlerts?: AlertListRelationFilter
    cards?: CardListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: IntFilter<"Card"> | number
    uid?: StringFilter<"Card"> | string
    userId?: IntFilter<"Card"> | number
    description?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    userId?: IntFilter<"Card"> | number
    description?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "uid">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Card"> | number
    uid?: StringWithAggregatesFilter<"Card"> | string
    userId?: IntWithAggregatesFilter<"Card"> | number
    description?: StringNullableWithAggregatesFilter<"Card"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: IntFilter<"Station"> | number
    name?: StringFilter<"Station"> | string
    location?: StringFilter<"Station"> | string
    description?: StringNullableFilter<"Station"> | string | null
    apiKey?: StringFilter<"Station"> | string
    status?: EnumStationStatusFilter<"Station"> | $Enums.StationStatus
    lastReading?: DateTimeNullableFilter<"Station"> | Date | string | null
    createdAt?: DateTimeFilter<"Station"> | Date | string
    updatedAt?: DateTimeFilter<"Station"> | Date | string
    sensorData?: SensorDataListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    lastReading?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sensorData?: SensorDataOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    apiKey?: string
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    name?: StringFilter<"Station"> | string
    location?: StringFilter<"Station"> | string
    description?: StringNullableFilter<"Station"> | string | null
    status?: EnumStationStatusFilter<"Station"> | $Enums.StationStatus
    lastReading?: DateTimeNullableFilter<"Station"> | Date | string | null
    createdAt?: DateTimeFilter<"Station"> | Date | string
    updatedAt?: DateTimeFilter<"Station"> | Date | string
    sensorData?: SensorDataListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "apiKey">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    lastReading?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _avg?: StationAvgOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
    _sum?: StationSumOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Station"> | number
    name?: StringWithAggregatesFilter<"Station"> | string
    location?: StringWithAggregatesFilter<"Station"> | string
    description?: StringNullableWithAggregatesFilter<"Station"> | string | null
    apiKey?: StringWithAggregatesFilter<"Station"> | string
    status?: EnumStationStatusWithAggregatesFilter<"Station"> | $Enums.StationStatus
    lastReading?: DateTimeNullableWithAggregatesFilter<"Station"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Station"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Station"> | Date | string
  }

  export type SensorDataWhereInput = {
    AND?: SensorDataWhereInput | SensorDataWhereInput[]
    OR?: SensorDataWhereInput[]
    NOT?: SensorDataWhereInput | SensorDataWhereInput[]
    id?: IntFilter<"SensorData"> | number
    stationId?: IntFilter<"SensorData"> | number
    timestamp?: DateTimeFilter<"SensorData"> | Date | string
    turbidity?: FloatFilter<"SensorData"> | number
    turbidityUnit?: StringFilter<"SensorData"> | string
    turbidityStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    tds?: FloatFilter<"SensorData"> | number
    tdsUnit?: StringFilter<"SensorData"> | string
    tdsStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    flowRate?: FloatFilter<"SensorData"> | number
    flowRateUnit?: StringFilter<"SensorData"> | string
    flowRateStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    totalFlow?: FloatFilter<"SensorData"> | number
    totalFlowUnit?: StringFilter<"SensorData"> | string
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
    alerts?: AlertListRelationFilter
  }

  export type SensorDataOrderByWithRelationInput = {
    id?: SortOrder
    stationId?: SortOrder
    timestamp?: SortOrder
    turbidity?: SortOrder
    turbidityUnit?: SortOrder
    turbidityStatus?: SortOrder
    tds?: SortOrder
    tdsUnit?: SortOrder
    tdsStatus?: SortOrder
    flowRate?: SortOrder
    flowRateUnit?: SortOrder
    flowRateStatus?: SortOrder
    totalFlow?: SortOrder
    totalFlowUnit?: SortOrder
    station?: StationOrderByWithRelationInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type SensorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SensorDataWhereInput | SensorDataWhereInput[]
    OR?: SensorDataWhereInput[]
    NOT?: SensorDataWhereInput | SensorDataWhereInput[]
    stationId?: IntFilter<"SensorData"> | number
    timestamp?: DateTimeFilter<"SensorData"> | Date | string
    turbidity?: FloatFilter<"SensorData"> | number
    turbidityUnit?: StringFilter<"SensorData"> | string
    turbidityStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    tds?: FloatFilter<"SensorData"> | number
    tdsUnit?: StringFilter<"SensorData"> | string
    tdsStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    flowRate?: FloatFilter<"SensorData"> | number
    flowRateUnit?: StringFilter<"SensorData"> | string
    flowRateStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    totalFlow?: FloatFilter<"SensorData"> | number
    totalFlowUnit?: StringFilter<"SensorData"> | string
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
    alerts?: AlertListRelationFilter
  }, "id">

  export type SensorDataOrderByWithAggregationInput = {
    id?: SortOrder
    stationId?: SortOrder
    timestamp?: SortOrder
    turbidity?: SortOrder
    turbidityUnit?: SortOrder
    turbidityStatus?: SortOrder
    tds?: SortOrder
    tdsUnit?: SortOrder
    tdsStatus?: SortOrder
    flowRate?: SortOrder
    flowRateUnit?: SortOrder
    flowRateStatus?: SortOrder
    totalFlow?: SortOrder
    totalFlowUnit?: SortOrder
    _count?: SensorDataCountOrderByAggregateInput
    _avg?: SensorDataAvgOrderByAggregateInput
    _max?: SensorDataMaxOrderByAggregateInput
    _min?: SensorDataMinOrderByAggregateInput
    _sum?: SensorDataSumOrderByAggregateInput
  }

  export type SensorDataScalarWhereWithAggregatesInput = {
    AND?: SensorDataScalarWhereWithAggregatesInput | SensorDataScalarWhereWithAggregatesInput[]
    OR?: SensorDataScalarWhereWithAggregatesInput[]
    NOT?: SensorDataScalarWhereWithAggregatesInput | SensorDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SensorData"> | number
    stationId?: IntWithAggregatesFilter<"SensorData"> | number
    timestamp?: DateTimeWithAggregatesFilter<"SensorData"> | Date | string
    turbidity?: FloatWithAggregatesFilter<"SensorData"> | number
    turbidityUnit?: StringWithAggregatesFilter<"SensorData"> | string
    turbidityStatus?: EnumSensorStatusWithAggregatesFilter<"SensorData"> | $Enums.SensorStatus
    tds?: FloatWithAggregatesFilter<"SensorData"> | number
    tdsUnit?: StringWithAggregatesFilter<"SensorData"> | string
    tdsStatus?: EnumSensorStatusWithAggregatesFilter<"SensorData"> | $Enums.SensorStatus
    flowRate?: FloatWithAggregatesFilter<"SensorData"> | number
    flowRateUnit?: StringWithAggregatesFilter<"SensorData"> | string
    flowRateStatus?: EnumSensorStatusWithAggregatesFilter<"SensorData"> | $Enums.SensorStatus
    totalFlow?: FloatWithAggregatesFilter<"SensorData"> | number
    totalFlowUnit?: StringWithAggregatesFilter<"SensorData"> | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: IntFilter<"Alert"> | number
    stationId?: IntFilter<"Alert"> | number
    sensorDataId?: IntNullableFilter<"Alert"> | number | null
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    message?: StringFilter<"Alert"> | string
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    resolvedById?: IntNullableFilter<"Alert"> | number | null
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
    sensorData?: XOR<SensorDataNullableScalarRelationFilter, SensorDataWhereInput> | null
    resolvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    stationId?: SortOrder
    sensorDataId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedById?: SortOrderInput | SortOrder
    station?: StationOrderByWithRelationInput
    sensorData?: SensorDataOrderByWithRelationInput
    resolvedBy?: UserOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    stationId?: IntFilter<"Alert"> | number
    sensorDataId?: IntNullableFilter<"Alert"> | number | null
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    message?: StringFilter<"Alert"> | string
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    resolvedById?: IntNullableFilter<"Alert"> | number | null
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
    sensorData?: XOR<SensorDataNullableScalarRelationFilter, SensorDataWhereInput> | null
    resolvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    stationId?: SortOrder
    sensorDataId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedById?: SortOrderInput | SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alert"> | number
    stationId?: IntWithAggregatesFilter<"Alert"> | number
    sensorDataId?: IntNullableWithAggregatesFilter<"Alert"> | number | null
    type?: EnumAlertTypeWithAggregatesFilter<"Alert"> | $Enums.AlertType
    message?: StringWithAggregatesFilter<"Alert"> | string
    status?: EnumAlertStatusWithAggregatesFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
    resolvedById?: IntNullableWithAggregatesFilter<"Alert"> | number | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAlerts?: AlertCreateNestedManyWithoutResolvedByInput
    cards?: CardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAlerts?: AlertUncheckedCreateNestedManyWithoutResolvedByInput
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAlerts?: AlertUpdateManyWithoutResolvedByNestedInput
    cards?: CardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAlerts?: AlertUncheckedUpdateManyWithoutResolvedByNestedInput
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateInput = {
    uid: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id?: number
    uid: string
    userId: number
    description?: string | null
    createdAt?: Date | string
  }

  export type CardUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateManyInput = {
    id?: number
    uid: string
    userId: number
    description?: string | null
    createdAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationCreateInput = {
    name: string
    location: string
    description?: string | null
    apiKey: string
    status?: $Enums.StationStatus
    lastReading?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sensorData?: SensorDataCreateNestedManyWithoutStationInput
    alerts?: AlertCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    description?: string | null
    apiKey: string
    status?: $Enums.StationStatus
    lastReading?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sensorData?: SensorDataUncheckedCreateNestedManyWithoutStationInput
    alerts?: AlertUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: EnumStationStatusFieldUpdateOperationsInput | $Enums.StationStatus
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensorData?: SensorDataUpdateManyWithoutStationNestedInput
    alerts?: AlertUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: EnumStationStatusFieldUpdateOperationsInput | $Enums.StationStatus
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensorData?: SensorDataUncheckedUpdateManyWithoutStationNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutStationNestedInput
  }

  export type StationCreateManyInput = {
    id?: number
    name: string
    location: string
    description?: string | null
    apiKey: string
    status?: $Enums.StationStatus
    lastReading?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: EnumStationStatusFieldUpdateOperationsInput | $Enums.StationStatus
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: EnumStationStatusFieldUpdateOperationsInput | $Enums.StationStatus
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorDataCreateInput = {
    timestamp?: Date | string
    turbidity: number
    turbidityUnit?: string
    turbidityStatus?: $Enums.SensorStatus
    tds: number
    tdsUnit?: string
    tdsStatus?: $Enums.SensorStatus
    flowRate: number
    flowRateUnit?: string
    flowRateStatus?: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit?: string
    station: StationCreateNestedOneWithoutSensorDataInput
    alerts?: AlertCreateNestedManyWithoutSensorDataInput
  }

  export type SensorDataUncheckedCreateInput = {
    id?: number
    stationId: number
    timestamp?: Date | string
    turbidity: number
    turbidityUnit?: string
    turbidityStatus?: $Enums.SensorStatus
    tds: number
    tdsUnit?: string
    tdsStatus?: $Enums.SensorStatus
    flowRate: number
    flowRateUnit?: string
    flowRateStatus?: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit?: string
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorDataInput
  }

  export type SensorDataUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
    station?: StationUpdateOneRequiredWithoutSensorDataNestedInput
    alerts?: AlertUpdateManyWithoutSensorDataNestedInput
  }

  export type SensorDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
    alerts?: AlertUncheckedUpdateManyWithoutSensorDataNestedInput
  }

  export type SensorDataCreateManyInput = {
    id?: number
    stationId: number
    timestamp?: Date | string
    turbidity: number
    turbidityUnit?: string
    turbidityStatus?: $Enums.SensorStatus
    tds: number
    tdsUnit?: string
    tdsStatus?: $Enums.SensorStatus
    flowRate: number
    flowRateUnit?: string
    flowRateStatus?: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit?: string
  }

  export type SensorDataUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
  }

  export type SensorDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
  }

  export type AlertCreateInput = {
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    station: StationCreateNestedOneWithoutAlertsInput
    sensorData?: SensorDataCreateNestedOneWithoutAlertsInput
    resolvedBy?: UserCreateNestedOneWithoutResolvedAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: number
    stationId: number
    sensorDataId?: number | null
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    resolvedById?: number | null
  }

  export type AlertUpdateInput = {
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station?: StationUpdateOneRequiredWithoutAlertsNestedInput
    sensorData?: SensorDataUpdateOneWithoutAlertsNestedInput
    resolvedBy?: UserUpdateOneWithoutResolvedAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    sensorDataId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertCreateManyInput = {
    id?: number
    stationId: number
    sensorDataId?: number | null
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    resolvedById?: number | null
  }

  export type AlertUpdateManyMutationInput = {
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    sensorDataId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedById?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type EnumStationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StationStatus | EnumStationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StationStatus[] | ListEnumStationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StationStatus[] | ListEnumStationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStationStatusFilter<$PrismaModel> | $Enums.StationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SensorDataListRelationFilter = {
    every?: SensorDataWhereInput
    some?: SensorDataWhereInput
    none?: SensorDataWhereInput
  }

  export type SensorDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    lastReading?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    lastReading?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    apiKey?: SortOrder
    status?: SortOrder
    lastReading?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StationStatus | EnumStationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StationStatus[] | ListEnumStationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StationStatus[] | ListEnumStationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStationStatusWithAggregatesFilter<$PrismaModel> | $Enums.StationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStationStatusFilter<$PrismaModel>
    _max?: NestedEnumStationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumSensorStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SensorStatus | EnumSensorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SensorStatus[] | ListEnumSensorStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SensorStatus[] | ListEnumSensorStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSensorStatusFilter<$PrismaModel> | $Enums.SensorStatus
  }

  export type StationScalarRelationFilter = {
    is?: StationWhereInput
    isNot?: StationWhereInput
  }

  export type SensorDataCountOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    timestamp?: SortOrder
    turbidity?: SortOrder
    turbidityUnit?: SortOrder
    turbidityStatus?: SortOrder
    tds?: SortOrder
    tdsUnit?: SortOrder
    tdsStatus?: SortOrder
    flowRate?: SortOrder
    flowRateUnit?: SortOrder
    flowRateStatus?: SortOrder
    totalFlow?: SortOrder
    totalFlowUnit?: SortOrder
  }

  export type SensorDataAvgOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    turbidity?: SortOrder
    tds?: SortOrder
    flowRate?: SortOrder
    totalFlow?: SortOrder
  }

  export type SensorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    timestamp?: SortOrder
    turbidity?: SortOrder
    turbidityUnit?: SortOrder
    turbidityStatus?: SortOrder
    tds?: SortOrder
    tdsUnit?: SortOrder
    tdsStatus?: SortOrder
    flowRate?: SortOrder
    flowRateUnit?: SortOrder
    flowRateStatus?: SortOrder
    totalFlow?: SortOrder
    totalFlowUnit?: SortOrder
  }

  export type SensorDataMinOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    timestamp?: SortOrder
    turbidity?: SortOrder
    turbidityUnit?: SortOrder
    turbidityStatus?: SortOrder
    tds?: SortOrder
    tdsUnit?: SortOrder
    tdsStatus?: SortOrder
    flowRate?: SortOrder
    flowRateUnit?: SortOrder
    flowRateStatus?: SortOrder
    totalFlow?: SortOrder
    totalFlowUnit?: SortOrder
  }

  export type SensorDataSumOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    turbidity?: SortOrder
    tds?: SortOrder
    flowRate?: SortOrder
    totalFlow?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumSensorStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SensorStatus | EnumSensorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SensorStatus[] | ListEnumSensorStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SensorStatus[] | ListEnumSensorStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSensorStatusWithAggregatesFilter<$PrismaModel> | $Enums.SensorStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSensorStatusFilter<$PrismaModel>
    _max?: NestedEnumSensorStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type EnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type SensorDataNullableScalarRelationFilter = {
    is?: SensorDataWhereInput | null
    isNot?: SensorDataWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    sensorDataId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedById?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    sensorDataId?: SortOrder
    resolvedById?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    sensorDataId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedById?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    sensorDataId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedById?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    sensorDataId?: SortOrder
    resolvedById?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type EnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type AlertCreateNestedManyWithoutResolvedByInput = {
    create?: XOR<AlertCreateWithoutResolvedByInput, AlertUncheckedCreateWithoutResolvedByInput> | AlertCreateWithoutResolvedByInput[] | AlertUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutResolvedByInput | AlertCreateOrConnectWithoutResolvedByInput[]
    createMany?: AlertCreateManyResolvedByInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type CardCreateNestedManyWithoutUserInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutResolvedByInput = {
    create?: XOR<AlertCreateWithoutResolvedByInput, AlertUncheckedCreateWithoutResolvedByInput> | AlertCreateWithoutResolvedByInput[] | AlertUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutResolvedByInput | AlertCreateOrConnectWithoutResolvedByInput[]
    createMany?: AlertCreateManyResolvedByInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AlertUpdateManyWithoutResolvedByNestedInput = {
    create?: XOR<AlertCreateWithoutResolvedByInput, AlertUncheckedCreateWithoutResolvedByInput> | AlertCreateWithoutResolvedByInput[] | AlertUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutResolvedByInput | AlertCreateOrConnectWithoutResolvedByInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutResolvedByInput | AlertUpsertWithWhereUniqueWithoutResolvedByInput[]
    createMany?: AlertCreateManyResolvedByInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutResolvedByInput | AlertUpdateWithWhereUniqueWithoutResolvedByInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutResolvedByInput | AlertUpdateManyWithWhereWithoutResolvedByInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type CardUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput | CardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutUserInput | CardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardUpdateManyWithWhereWithoutUserInput | CardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlertUncheckedUpdateManyWithoutResolvedByNestedInput = {
    create?: XOR<AlertCreateWithoutResolvedByInput, AlertUncheckedCreateWithoutResolvedByInput> | AlertCreateWithoutResolvedByInput[] | AlertUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutResolvedByInput | AlertCreateOrConnectWithoutResolvedByInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutResolvedByInput | AlertUpsertWithWhereUniqueWithoutResolvedByInput[]
    createMany?: AlertCreateManyResolvedByInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutResolvedByInput | AlertUpdateWithWhereUniqueWithoutResolvedByInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutResolvedByInput | AlertUpdateManyWithWhereWithoutResolvedByInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput | CardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutUserInput | CardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardUpdateManyWithWhereWithoutUserInput | CardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCardsInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    upsert?: UserUpsertWithoutCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCardsInput, UserUpdateWithoutCardsInput>, UserUncheckedUpdateWithoutCardsInput>
  }

  export type SensorDataCreateNestedManyWithoutStationInput = {
    create?: XOR<SensorDataCreateWithoutStationInput, SensorDataUncheckedCreateWithoutStationInput> | SensorDataCreateWithoutStationInput[] | SensorDataUncheckedCreateWithoutStationInput[]
    connectOrCreate?: SensorDataCreateOrConnectWithoutStationInput | SensorDataCreateOrConnectWithoutStationInput[]
    createMany?: SensorDataCreateManyStationInputEnvelope
    connect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutStationInput = {
    create?: XOR<AlertCreateWithoutStationInput, AlertUncheckedCreateWithoutStationInput> | AlertCreateWithoutStationInput[] | AlertUncheckedCreateWithoutStationInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutStationInput | AlertCreateOrConnectWithoutStationInput[]
    createMany?: AlertCreateManyStationInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type SensorDataUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<SensorDataCreateWithoutStationInput, SensorDataUncheckedCreateWithoutStationInput> | SensorDataCreateWithoutStationInput[] | SensorDataUncheckedCreateWithoutStationInput[]
    connectOrCreate?: SensorDataCreateOrConnectWithoutStationInput | SensorDataCreateOrConnectWithoutStationInput[]
    createMany?: SensorDataCreateManyStationInputEnvelope
    connect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<AlertCreateWithoutStationInput, AlertUncheckedCreateWithoutStationInput> | AlertCreateWithoutStationInput[] | AlertUncheckedCreateWithoutStationInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutStationInput | AlertCreateOrConnectWithoutStationInput[]
    createMany?: AlertCreateManyStationInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type EnumStationStatusFieldUpdateOperationsInput = {
    set?: $Enums.StationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SensorDataUpdateManyWithoutStationNestedInput = {
    create?: XOR<SensorDataCreateWithoutStationInput, SensorDataUncheckedCreateWithoutStationInput> | SensorDataCreateWithoutStationInput[] | SensorDataUncheckedCreateWithoutStationInput[]
    connectOrCreate?: SensorDataCreateOrConnectWithoutStationInput | SensorDataCreateOrConnectWithoutStationInput[]
    upsert?: SensorDataUpsertWithWhereUniqueWithoutStationInput | SensorDataUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: SensorDataCreateManyStationInputEnvelope
    set?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    disconnect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    delete?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    connect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    update?: SensorDataUpdateWithWhereUniqueWithoutStationInput | SensorDataUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: SensorDataUpdateManyWithWhereWithoutStationInput | SensorDataUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: SensorDataScalarWhereInput | SensorDataScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutStationNestedInput = {
    create?: XOR<AlertCreateWithoutStationInput, AlertUncheckedCreateWithoutStationInput> | AlertCreateWithoutStationInput[] | AlertUncheckedCreateWithoutStationInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutStationInput | AlertCreateOrConnectWithoutStationInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutStationInput | AlertUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: AlertCreateManyStationInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutStationInput | AlertUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutStationInput | AlertUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type SensorDataUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<SensorDataCreateWithoutStationInput, SensorDataUncheckedCreateWithoutStationInput> | SensorDataCreateWithoutStationInput[] | SensorDataUncheckedCreateWithoutStationInput[]
    connectOrCreate?: SensorDataCreateOrConnectWithoutStationInput | SensorDataCreateOrConnectWithoutStationInput[]
    upsert?: SensorDataUpsertWithWhereUniqueWithoutStationInput | SensorDataUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: SensorDataCreateManyStationInputEnvelope
    set?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    disconnect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    delete?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    connect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    update?: SensorDataUpdateWithWhereUniqueWithoutStationInput | SensorDataUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: SensorDataUpdateManyWithWhereWithoutStationInput | SensorDataUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: SensorDataScalarWhereInput | SensorDataScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<AlertCreateWithoutStationInput, AlertUncheckedCreateWithoutStationInput> | AlertCreateWithoutStationInput[] | AlertUncheckedCreateWithoutStationInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutStationInput | AlertCreateOrConnectWithoutStationInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutStationInput | AlertUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: AlertCreateManyStationInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutStationInput | AlertUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutStationInput | AlertUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type StationCreateNestedOneWithoutSensorDataInput = {
    create?: XOR<StationCreateWithoutSensorDataInput, StationUncheckedCreateWithoutSensorDataInput>
    connectOrCreate?: StationCreateOrConnectWithoutSensorDataInput
    connect?: StationWhereUniqueInput
  }

  export type AlertCreateNestedManyWithoutSensorDataInput = {
    create?: XOR<AlertCreateWithoutSensorDataInput, AlertUncheckedCreateWithoutSensorDataInput> | AlertCreateWithoutSensorDataInput[] | AlertUncheckedCreateWithoutSensorDataInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorDataInput | AlertCreateOrConnectWithoutSensorDataInput[]
    createMany?: AlertCreateManySensorDataInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutSensorDataInput = {
    create?: XOR<AlertCreateWithoutSensorDataInput, AlertUncheckedCreateWithoutSensorDataInput> | AlertCreateWithoutSensorDataInput[] | AlertUncheckedCreateWithoutSensorDataInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorDataInput | AlertCreateOrConnectWithoutSensorDataInput[]
    createMany?: AlertCreateManySensorDataInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSensorStatusFieldUpdateOperationsInput = {
    set?: $Enums.SensorStatus
  }

  export type StationUpdateOneRequiredWithoutSensorDataNestedInput = {
    create?: XOR<StationCreateWithoutSensorDataInput, StationUncheckedCreateWithoutSensorDataInput>
    connectOrCreate?: StationCreateOrConnectWithoutSensorDataInput
    upsert?: StationUpsertWithoutSensorDataInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutSensorDataInput, StationUpdateWithoutSensorDataInput>, StationUncheckedUpdateWithoutSensorDataInput>
  }

  export type AlertUpdateManyWithoutSensorDataNestedInput = {
    create?: XOR<AlertCreateWithoutSensorDataInput, AlertUncheckedCreateWithoutSensorDataInput> | AlertCreateWithoutSensorDataInput[] | AlertUncheckedCreateWithoutSensorDataInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorDataInput | AlertCreateOrConnectWithoutSensorDataInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorDataInput | AlertUpsertWithWhereUniqueWithoutSensorDataInput[]
    createMany?: AlertCreateManySensorDataInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorDataInput | AlertUpdateWithWhereUniqueWithoutSensorDataInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorDataInput | AlertUpdateManyWithWhereWithoutSensorDataInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutSensorDataNestedInput = {
    create?: XOR<AlertCreateWithoutSensorDataInput, AlertUncheckedCreateWithoutSensorDataInput> | AlertCreateWithoutSensorDataInput[] | AlertUncheckedCreateWithoutSensorDataInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorDataInput | AlertCreateOrConnectWithoutSensorDataInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorDataInput | AlertUpsertWithWhereUniqueWithoutSensorDataInput[]
    createMany?: AlertCreateManySensorDataInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorDataInput | AlertUpdateWithWhereUniqueWithoutSensorDataInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorDataInput | AlertUpdateManyWithWhereWithoutSensorDataInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type StationCreateNestedOneWithoutAlertsInput = {
    create?: XOR<StationCreateWithoutAlertsInput, StationUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: StationCreateOrConnectWithoutAlertsInput
    connect?: StationWhereUniqueInput
  }

  export type SensorDataCreateNestedOneWithoutAlertsInput = {
    create?: XOR<SensorDataCreateWithoutAlertsInput, SensorDataUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SensorDataCreateOrConnectWithoutAlertsInput
    connect?: SensorDataWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResolvedAlertsInput = {
    create?: XOR<UserCreateWithoutResolvedAlertsInput, UserUncheckedCreateWithoutResolvedAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResolvedAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type EnumAlertStatusFieldUpdateOperationsInput = {
    set?: $Enums.AlertStatus
  }

  export type StationUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<StationCreateWithoutAlertsInput, StationUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: StationCreateOrConnectWithoutAlertsInput
    upsert?: StationUpsertWithoutAlertsInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutAlertsInput, StationUpdateWithoutAlertsInput>, StationUncheckedUpdateWithoutAlertsInput>
  }

  export type SensorDataUpdateOneWithoutAlertsNestedInput = {
    create?: XOR<SensorDataCreateWithoutAlertsInput, SensorDataUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SensorDataCreateOrConnectWithoutAlertsInput
    upsert?: SensorDataUpsertWithoutAlertsInput
    disconnect?: SensorDataWhereInput | boolean
    delete?: SensorDataWhereInput | boolean
    connect?: SensorDataWhereUniqueInput
    update?: XOR<XOR<SensorDataUpdateToOneWithWhereWithoutAlertsInput, SensorDataUpdateWithoutAlertsInput>, SensorDataUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateOneWithoutResolvedAlertsNestedInput = {
    create?: XOR<UserCreateWithoutResolvedAlertsInput, UserUncheckedCreateWithoutResolvedAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResolvedAlertsInput
    upsert?: UserUpsertWithoutResolvedAlertsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResolvedAlertsInput, UserUpdateWithoutResolvedAlertsInput>, UserUncheckedUpdateWithoutResolvedAlertsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumStationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StationStatus | EnumStationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StationStatus[] | ListEnumStationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StationStatus[] | ListEnumStationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStationStatusFilter<$PrismaModel> | $Enums.StationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StationStatus | EnumStationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StationStatus[] | ListEnumStationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StationStatus[] | ListEnumStationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStationStatusWithAggregatesFilter<$PrismaModel> | $Enums.StationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStationStatusFilter<$PrismaModel>
    _max?: NestedEnumStationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSensorStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SensorStatus | EnumSensorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SensorStatus[] | ListEnumSensorStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SensorStatus[] | ListEnumSensorStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSensorStatusFilter<$PrismaModel> | $Enums.SensorStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSensorStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SensorStatus | EnumSensorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SensorStatus[] | ListEnumSensorStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SensorStatus[] | ListEnumSensorStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSensorStatusWithAggregatesFilter<$PrismaModel> | $Enums.SensorStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSensorStatusFilter<$PrismaModel>
    _max?: NestedEnumSensorStatusFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedEnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type AlertCreateWithoutResolvedByInput = {
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    station: StationCreateNestedOneWithoutAlertsInput
    sensorData?: SensorDataCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutResolvedByInput = {
    id?: number
    stationId: number
    sensorDataId?: number | null
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type AlertCreateOrConnectWithoutResolvedByInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutResolvedByInput, AlertUncheckedCreateWithoutResolvedByInput>
  }

  export type AlertCreateManyResolvedByInputEnvelope = {
    data: AlertCreateManyResolvedByInput | AlertCreateManyResolvedByInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutUserInput = {
    uid: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CardUncheckedCreateWithoutUserInput = {
    id?: number
    uid: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CardCreateOrConnectWithoutUserInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput>
  }

  export type CardCreateManyUserInputEnvelope = {
    data: CardCreateManyUserInput | CardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlertUpsertWithWhereUniqueWithoutResolvedByInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutResolvedByInput, AlertUncheckedUpdateWithoutResolvedByInput>
    create: XOR<AlertCreateWithoutResolvedByInput, AlertUncheckedCreateWithoutResolvedByInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutResolvedByInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutResolvedByInput, AlertUncheckedUpdateWithoutResolvedByInput>
  }

  export type AlertUpdateManyWithWhereWithoutResolvedByInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutResolvedByInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: IntFilter<"Alert"> | number
    stationId?: IntFilter<"Alert"> | number
    sensorDataId?: IntNullableFilter<"Alert"> | number | null
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    message?: StringFilter<"Alert"> | string
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    resolvedById?: IntNullableFilter<"Alert"> | number | null
  }

  export type CardUpsertWithWhereUniqueWithoutUserInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutUserInput, CardUncheckedUpdateWithoutUserInput>
    create: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput>
  }

  export type CardUpdateWithWhereUniqueWithoutUserInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutUserInput, CardUncheckedUpdateWithoutUserInput>
  }

  export type CardUpdateManyWithWhereWithoutUserInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutUserInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: IntFilter<"Card"> | number
    uid?: StringFilter<"Card"> | string
    userId?: IntFilter<"Card"> | number
    description?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
  }

  export type UserCreateWithoutCardsInput = {
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAlerts?: AlertCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutCardsInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAlerts?: AlertUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
  }

  export type UserUpsertWithoutCardsInput = {
    update: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
  }

  export type UserUpdateWithoutCardsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAlerts?: AlertUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAlerts?: AlertUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type SensorDataCreateWithoutStationInput = {
    timestamp?: Date | string
    turbidity: number
    turbidityUnit?: string
    turbidityStatus?: $Enums.SensorStatus
    tds: number
    tdsUnit?: string
    tdsStatus?: $Enums.SensorStatus
    flowRate: number
    flowRateUnit?: string
    flowRateStatus?: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit?: string
    alerts?: AlertCreateNestedManyWithoutSensorDataInput
  }

  export type SensorDataUncheckedCreateWithoutStationInput = {
    id?: number
    timestamp?: Date | string
    turbidity: number
    turbidityUnit?: string
    turbidityStatus?: $Enums.SensorStatus
    tds: number
    tdsUnit?: string
    tdsStatus?: $Enums.SensorStatus
    flowRate: number
    flowRateUnit?: string
    flowRateStatus?: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit?: string
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorDataInput
  }

  export type SensorDataCreateOrConnectWithoutStationInput = {
    where: SensorDataWhereUniqueInput
    create: XOR<SensorDataCreateWithoutStationInput, SensorDataUncheckedCreateWithoutStationInput>
  }

  export type SensorDataCreateManyStationInputEnvelope = {
    data: SensorDataCreateManyStationInput | SensorDataCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutStationInput = {
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    sensorData?: SensorDataCreateNestedOneWithoutAlertsInput
    resolvedBy?: UserCreateNestedOneWithoutResolvedAlertsInput
  }

  export type AlertUncheckedCreateWithoutStationInput = {
    id?: number
    sensorDataId?: number | null
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    resolvedById?: number | null
  }

  export type AlertCreateOrConnectWithoutStationInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutStationInput, AlertUncheckedCreateWithoutStationInput>
  }

  export type AlertCreateManyStationInputEnvelope = {
    data: AlertCreateManyStationInput | AlertCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type SensorDataUpsertWithWhereUniqueWithoutStationInput = {
    where: SensorDataWhereUniqueInput
    update: XOR<SensorDataUpdateWithoutStationInput, SensorDataUncheckedUpdateWithoutStationInput>
    create: XOR<SensorDataCreateWithoutStationInput, SensorDataUncheckedCreateWithoutStationInput>
  }

  export type SensorDataUpdateWithWhereUniqueWithoutStationInput = {
    where: SensorDataWhereUniqueInput
    data: XOR<SensorDataUpdateWithoutStationInput, SensorDataUncheckedUpdateWithoutStationInput>
  }

  export type SensorDataUpdateManyWithWhereWithoutStationInput = {
    where: SensorDataScalarWhereInput
    data: XOR<SensorDataUpdateManyMutationInput, SensorDataUncheckedUpdateManyWithoutStationInput>
  }

  export type SensorDataScalarWhereInput = {
    AND?: SensorDataScalarWhereInput | SensorDataScalarWhereInput[]
    OR?: SensorDataScalarWhereInput[]
    NOT?: SensorDataScalarWhereInput | SensorDataScalarWhereInput[]
    id?: IntFilter<"SensorData"> | number
    stationId?: IntFilter<"SensorData"> | number
    timestamp?: DateTimeFilter<"SensorData"> | Date | string
    turbidity?: FloatFilter<"SensorData"> | number
    turbidityUnit?: StringFilter<"SensorData"> | string
    turbidityStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    tds?: FloatFilter<"SensorData"> | number
    tdsUnit?: StringFilter<"SensorData"> | string
    tdsStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    flowRate?: FloatFilter<"SensorData"> | number
    flowRateUnit?: StringFilter<"SensorData"> | string
    flowRateStatus?: EnumSensorStatusFilter<"SensorData"> | $Enums.SensorStatus
    totalFlow?: FloatFilter<"SensorData"> | number
    totalFlowUnit?: StringFilter<"SensorData"> | string
  }

  export type AlertUpsertWithWhereUniqueWithoutStationInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutStationInput, AlertUncheckedUpdateWithoutStationInput>
    create: XOR<AlertCreateWithoutStationInput, AlertUncheckedCreateWithoutStationInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutStationInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutStationInput, AlertUncheckedUpdateWithoutStationInput>
  }

  export type AlertUpdateManyWithWhereWithoutStationInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutStationInput>
  }

  export type StationCreateWithoutSensorDataInput = {
    name: string
    location: string
    description?: string | null
    apiKey: string
    status?: $Enums.StationStatus
    lastReading?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateWithoutSensorDataInput = {
    id?: number
    name: string
    location: string
    description?: string | null
    apiKey: string
    status?: $Enums.StationStatus
    lastReading?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationCreateOrConnectWithoutSensorDataInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutSensorDataInput, StationUncheckedCreateWithoutSensorDataInput>
  }

  export type AlertCreateWithoutSensorDataInput = {
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    station: StationCreateNestedOneWithoutAlertsInput
    resolvedBy?: UserCreateNestedOneWithoutResolvedAlertsInput
  }

  export type AlertUncheckedCreateWithoutSensorDataInput = {
    id?: number
    stationId: number
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    resolvedById?: number | null
  }

  export type AlertCreateOrConnectWithoutSensorDataInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutSensorDataInput, AlertUncheckedCreateWithoutSensorDataInput>
  }

  export type AlertCreateManySensorDataInputEnvelope = {
    data: AlertCreateManySensorDataInput | AlertCreateManySensorDataInput[]
    skipDuplicates?: boolean
  }

  export type StationUpsertWithoutSensorDataInput = {
    update: XOR<StationUpdateWithoutSensorDataInput, StationUncheckedUpdateWithoutSensorDataInput>
    create: XOR<StationCreateWithoutSensorDataInput, StationUncheckedCreateWithoutSensorDataInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutSensorDataInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutSensorDataInput, StationUncheckedUpdateWithoutSensorDataInput>
  }

  export type StationUpdateWithoutSensorDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: EnumStationStatusFieldUpdateOperationsInput | $Enums.StationStatus
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateWithoutSensorDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: EnumStationStatusFieldUpdateOperationsInput | $Enums.StationStatus
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutStationNestedInput
  }

  export type AlertUpsertWithWhereUniqueWithoutSensorDataInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutSensorDataInput, AlertUncheckedUpdateWithoutSensorDataInput>
    create: XOR<AlertCreateWithoutSensorDataInput, AlertUncheckedCreateWithoutSensorDataInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutSensorDataInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutSensorDataInput, AlertUncheckedUpdateWithoutSensorDataInput>
  }

  export type AlertUpdateManyWithWhereWithoutSensorDataInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutSensorDataInput>
  }

  export type StationCreateWithoutAlertsInput = {
    name: string
    location: string
    description?: string | null
    apiKey: string
    status?: $Enums.StationStatus
    lastReading?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sensorData?: SensorDataCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateWithoutAlertsInput = {
    id?: number
    name: string
    location: string
    description?: string | null
    apiKey: string
    status?: $Enums.StationStatus
    lastReading?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sensorData?: SensorDataUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationCreateOrConnectWithoutAlertsInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutAlertsInput, StationUncheckedCreateWithoutAlertsInput>
  }

  export type SensorDataCreateWithoutAlertsInput = {
    timestamp?: Date | string
    turbidity: number
    turbidityUnit?: string
    turbidityStatus?: $Enums.SensorStatus
    tds: number
    tdsUnit?: string
    tdsStatus?: $Enums.SensorStatus
    flowRate: number
    flowRateUnit?: string
    flowRateStatus?: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit?: string
    station: StationCreateNestedOneWithoutSensorDataInput
  }

  export type SensorDataUncheckedCreateWithoutAlertsInput = {
    id?: number
    stationId: number
    timestamp?: Date | string
    turbidity: number
    turbidityUnit?: string
    turbidityStatus?: $Enums.SensorStatus
    tds: number
    tdsUnit?: string
    tdsStatus?: $Enums.SensorStatus
    flowRate: number
    flowRateUnit?: string
    flowRateStatus?: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit?: string
  }

  export type SensorDataCreateOrConnectWithoutAlertsInput = {
    where: SensorDataWhereUniqueInput
    create: XOR<SensorDataCreateWithoutAlertsInput, SensorDataUncheckedCreateWithoutAlertsInput>
  }

  export type UserCreateWithoutResolvedAlertsInput = {
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: CardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResolvedAlertsInput = {
    id?: number
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResolvedAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResolvedAlertsInput, UserUncheckedCreateWithoutResolvedAlertsInput>
  }

  export type StationUpsertWithoutAlertsInput = {
    update: XOR<StationUpdateWithoutAlertsInput, StationUncheckedUpdateWithoutAlertsInput>
    create: XOR<StationCreateWithoutAlertsInput, StationUncheckedCreateWithoutAlertsInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutAlertsInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutAlertsInput, StationUncheckedUpdateWithoutAlertsInput>
  }

  export type StationUpdateWithoutAlertsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: EnumStationStatusFieldUpdateOperationsInput | $Enums.StationStatus
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensorData?: SensorDataUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: StringFieldUpdateOperationsInput | string
    status?: EnumStationStatusFieldUpdateOperationsInput | $Enums.StationStatus
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensorData?: SensorDataUncheckedUpdateManyWithoutStationNestedInput
  }

  export type SensorDataUpsertWithoutAlertsInput = {
    update: XOR<SensorDataUpdateWithoutAlertsInput, SensorDataUncheckedUpdateWithoutAlertsInput>
    create: XOR<SensorDataCreateWithoutAlertsInput, SensorDataUncheckedCreateWithoutAlertsInput>
    where?: SensorDataWhereInput
  }

  export type SensorDataUpdateToOneWithWhereWithoutAlertsInput = {
    where?: SensorDataWhereInput
    data: XOR<SensorDataUpdateWithoutAlertsInput, SensorDataUncheckedUpdateWithoutAlertsInput>
  }

  export type SensorDataUpdateWithoutAlertsInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
    station?: StationUpdateOneRequiredWithoutSensorDataNestedInput
  }

  export type SensorDataUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutResolvedAlertsInput = {
    update: XOR<UserUpdateWithoutResolvedAlertsInput, UserUncheckedUpdateWithoutResolvedAlertsInput>
    create: XOR<UserCreateWithoutResolvedAlertsInput, UserUncheckedCreateWithoutResolvedAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResolvedAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResolvedAlertsInput, UserUncheckedUpdateWithoutResolvedAlertsInput>
  }

  export type UserUpdateWithoutResolvedAlertsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResolvedAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlertCreateManyResolvedByInput = {
    id?: number
    stationId: number
    sensorDataId?: number | null
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type CardCreateManyUserInput = {
    id?: number
    uid: string
    description?: string | null
    createdAt?: Date | string
  }

  export type AlertUpdateWithoutResolvedByInput = {
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station?: StationUpdateOneRequiredWithoutAlertsNestedInput
    sensorData?: SensorDataUpdateOneWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutResolvedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    sensorDataId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyWithoutResolvedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    sensorDataId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CardUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorDataCreateManyStationInput = {
    id?: number
    timestamp?: Date | string
    turbidity: number
    turbidityUnit?: string
    turbidityStatus?: $Enums.SensorStatus
    tds: number
    tdsUnit?: string
    tdsStatus?: $Enums.SensorStatus
    flowRate: number
    flowRateUnit?: string
    flowRateStatus?: $Enums.SensorStatus
    totalFlow: number
    totalFlowUnit?: string
  }

  export type AlertCreateManyStationInput = {
    id?: number
    sensorDataId?: number | null
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    resolvedById?: number | null
  }

  export type SensorDataUpdateWithoutStationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
    alerts?: AlertUpdateManyWithoutSensorDataNestedInput
  }

  export type SensorDataUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
    alerts?: AlertUncheckedUpdateManyWithoutSensorDataNestedInput
  }

  export type SensorDataUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turbidity?: FloatFieldUpdateOperationsInput | number
    turbidityUnit?: StringFieldUpdateOperationsInput | string
    turbidityStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    tds?: FloatFieldUpdateOperationsInput | number
    tdsUnit?: StringFieldUpdateOperationsInput | string
    tdsStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    flowRate?: FloatFieldUpdateOperationsInput | number
    flowRateUnit?: StringFieldUpdateOperationsInput | string
    flowRateStatus?: EnumSensorStatusFieldUpdateOperationsInput | $Enums.SensorStatus
    totalFlow?: FloatFieldUpdateOperationsInput | number
    totalFlowUnit?: StringFieldUpdateOperationsInput | string
  }

  export type AlertUpdateWithoutStationInput = {
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sensorData?: SensorDataUpdateOneWithoutAlertsNestedInput
    resolvedBy?: UserUpdateOneWithoutResolvedAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    sensorDataId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    sensorDataId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertCreateManySensorDataInput = {
    id?: number
    stationId: number
    type: $Enums.AlertType
    message: string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    resolvedById?: number | null
  }

  export type AlertUpdateWithoutSensorDataInput = {
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station?: StationUpdateOneRequiredWithoutAlertsNestedInput
    resolvedBy?: UserUpdateOneWithoutResolvedAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutSensorDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertUncheckedUpdateManyWithoutSensorDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedById?: NullableIntFieldUpdateOperationsInput | number | null
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