export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateProductInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateSessionInput = {
  id: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type CreateSessionResponse = {
  __typename?: 'CreateSessionResponse';
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCheckoutSession: CreateSessionResponse;
  createProduct: Product;
  removeProduct: Product;
  updateProduct: Product;
};


export type MutationCreateCheckoutSessionArgs = {
  items: Array<CreateSessionInput>;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  product: Product;
  products: Array<Product>;
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type UpdateProductInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, name: string, description: string, price: number, image: string, createdAt: any, updatedAt: any }> };
