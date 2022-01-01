import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  bytea: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "author" */
export type Author = {
  __typename?: 'author';
  auth0_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  drafts: Array<Draft>;
  /** An aggregate relationship */
  drafts_aggregate: Draft_Aggregate;
  email: Scalars['String'];
  id: Scalars['uuid'];
  last_seen: Scalars['timestamptz'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  notes: Array<Note>;
  /** An aggregate relationship */
  notes_aggregate: Note_Aggregate;
};


/** columns and relationships of "author" */
export type AuthorDraftsArgs = {
  distinct_on?: InputMaybe<Array<Draft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Draft_Order_By>>;
  where?: InputMaybe<Draft_Bool_Exp>;
};


/** columns and relationships of "author" */
export type AuthorDrafts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Draft_Order_By>>;
  where?: InputMaybe<Draft_Bool_Exp>;
};


/** columns and relationships of "author" */
export type AuthorNotesArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


/** columns and relationships of "author" */
export type AuthorNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};

/** aggregated selection of "author" */
export type Author_Aggregate = {
  __typename?: 'author_aggregate';
  aggregate?: Maybe<Author_Aggregate_Fields>;
  nodes: Array<Author>;
};

/** aggregate fields of "author" */
export type Author_Aggregate_Fields = {
  __typename?: 'author_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Author_Max_Fields>;
  min?: Maybe<Author_Min_Fields>;
};


/** aggregate fields of "author" */
export type Author_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Author_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "author". All fields are combined with a logical 'AND'. */
export type Author_Bool_Exp = {
  _and?: InputMaybe<Array<Author_Bool_Exp>>;
  _not?: InputMaybe<Author_Bool_Exp>;
  _or?: InputMaybe<Array<Author_Bool_Exp>>;
  auth0_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  drafts?: InputMaybe<Draft_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<Note_Bool_Exp>;
};

/** unique or primary key constraints on table "author" */
export enum Author_Constraint {
  /** unique or primary key constraint */
  AuthorAuth0UserIdKey = 'author_auth0UserId_key',
  /** unique or primary key constraint */
  AuthorPkey = 'author_pkey'
}

/** input type for inserting data into table "author" */
export type Author_Insert_Input = {
  auth0_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  drafts?: InputMaybe<Draft_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Note_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Author_Max_Fields = {
  __typename?: 'author_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Author_Min_Fields = {
  __typename?: 'author_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "author" */
export type Author_Mutation_Response = {
  __typename?: 'author_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Author>;
};

/** input type for inserting object relation for remote table "author" */
export type Author_Obj_Rel_Insert_Input = {
  data: Author_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Author_On_Conflict>;
};

/** on conflict condition type for table "author" */
export type Author_On_Conflict = {
  constraint: Author_Constraint;
  update_columns?: Array<Author_Update_Column>;
  where?: InputMaybe<Author_Bool_Exp>;
};

/** Ordering options when selecting data from "author". */
export type Author_Order_By = {
  auth0_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  drafts_aggregate?: InputMaybe<Draft_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes_aggregate?: InputMaybe<Note_Aggregate_Order_By>;
};

/** primary key columns input for table: author */
export type Author_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "author" */
export enum Author_Select_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "author" */
export type Author_Set_Input = {
  auth0_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "author" */
export enum Author_Update_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** columns and relationships of "draft" */
export type Draft = {
  __typename?: 'draft';
  /** An object relationship */
  author: Author;
  author_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  ended_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  /** An array relationship */
  notes: Array<Note>;
  /** An aggregate relationship */
  notes_aggregate: Note_Aggregate;
  /** An array relationship */
  pages: Array<Page>;
  /** An aggregate relationship */
  pages_aggregate: Page_Aggregate;
  table_of_contents: Scalars['jsonb'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "draft" */
export type DraftNotesArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


/** columns and relationships of "draft" */
export type DraftNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


/** columns and relationships of "draft" */
export type DraftPagesArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};


/** columns and relationships of "draft" */
export type DraftPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};


/** columns and relationships of "draft" */
export type DraftTable_Of_ContentsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "draft" */
export type Draft_Aggregate = {
  __typename?: 'draft_aggregate';
  aggregate?: Maybe<Draft_Aggregate_Fields>;
  nodes: Array<Draft>;
};

/** aggregate fields of "draft" */
export type Draft_Aggregate_Fields = {
  __typename?: 'draft_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Draft_Max_Fields>;
  min?: Maybe<Draft_Min_Fields>;
};


/** aggregate fields of "draft" */
export type Draft_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Draft_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "draft" */
export type Draft_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Draft_Max_Order_By>;
  min?: InputMaybe<Draft_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Draft_Append_Input = {
  table_of_contents?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "draft" */
export type Draft_Arr_Rel_Insert_Input = {
  data: Array<Draft_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Draft_On_Conflict>;
};

/** Boolean expression to filter rows from the table "draft". All fields are combined with a logical 'AND'. */
export type Draft_Bool_Exp = {
  _and?: InputMaybe<Array<Draft_Bool_Exp>>;
  _not?: InputMaybe<Draft_Bool_Exp>;
  _or?: InputMaybe<Array<Draft_Bool_Exp>>;
  author?: InputMaybe<Author_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  ended_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notes?: InputMaybe<Note_Bool_Exp>;
  pages?: InputMaybe<Page_Bool_Exp>;
  table_of_contents?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "draft" */
export enum Draft_Constraint {
  /** unique or primary key constraint */
  DraftPkey = 'draft_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Draft_Delete_At_Path_Input = {
  table_of_contents?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Draft_Delete_Elem_Input = {
  table_of_contents?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Draft_Delete_Key_Input = {
  table_of_contents?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "draft" */
export type Draft_Insert_Input = {
  author?: InputMaybe<Author_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  notes?: InputMaybe<Note_Arr_Rel_Insert_Input>;
  pages?: InputMaybe<Page_Arr_Rel_Insert_Input>;
  table_of_contents?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Draft_Max_Fields = {
  __typename?: 'draft_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "draft" */
export type Draft_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Draft_Min_Fields = {
  __typename?: 'draft_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "draft" */
export type Draft_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "draft" */
export type Draft_Mutation_Response = {
  __typename?: 'draft_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Draft>;
};

/** input type for inserting object relation for remote table "draft" */
export type Draft_Obj_Rel_Insert_Input = {
  data: Draft_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Draft_On_Conflict>;
};

/** on conflict condition type for table "draft" */
export type Draft_On_Conflict = {
  constraint: Draft_Constraint;
  update_columns?: Array<Draft_Update_Column>;
  where?: InputMaybe<Draft_Bool_Exp>;
};

/** Ordering options when selecting data from "draft". */
export type Draft_Order_By = {
  author?: InputMaybe<Author_Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes_aggregate?: InputMaybe<Note_Aggregate_Order_By>;
  pages_aggregate?: InputMaybe<Page_Aggregate_Order_By>;
  table_of_contents?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: draft */
export type Draft_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Draft_Prepend_Input = {
  table_of_contents?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "draft" */
export enum Draft_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  TableOfContents = 'table_of_contents',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "draft" */
export type Draft_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  table_of_contents?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "draft" */
export enum Draft_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  TableOfContents = 'table_of_contents',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "margin" */
export type Margin = {
  __typename?: 'margin';
  created_at: Scalars['timestamptz'];
  ended_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  img?: Maybe<Scalars['bytea']>;
  /** A computed field, executes function "content_img_to_base64" */
  imgBase64?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  page: Page;
  page_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "margin" */
export type MarginOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "margin" */
export type Margin_Aggregate = {
  __typename?: 'margin_aggregate';
  aggregate?: Maybe<Margin_Aggregate_Fields>;
  nodes: Array<Margin>;
};

/** aggregate fields of "margin" */
export type Margin_Aggregate_Fields = {
  __typename?: 'margin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Margin_Max_Fields>;
  min?: Maybe<Margin_Min_Fields>;
};


/** aggregate fields of "margin" */
export type Margin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Margin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "margin" */
export type Margin_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Margin_Max_Order_By>;
  min?: InputMaybe<Margin_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Margin_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "margin" */
export type Margin_Arr_Rel_Insert_Input = {
  data: Array<Margin_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Margin_On_Conflict>;
};

/** Boolean expression to filter rows from the table "margin". All fields are combined with a logical 'AND'. */
export type Margin_Bool_Exp = {
  _and?: InputMaybe<Array<Margin_Bool_Exp>>;
  _not?: InputMaybe<Margin_Bool_Exp>;
  _or?: InputMaybe<Array<Margin_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  ended_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img?: InputMaybe<Bytea_Comparison_Exp>;
  imgBase64?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
  page?: InputMaybe<Page_Bool_Exp>;
  page_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "margin" */
export enum Margin_Constraint {
  /** unique or primary key constraint */
  MarginPkey = 'margin_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Margin_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Margin_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Margin_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "margin" */
export type Margin_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  img?: InputMaybe<Scalars['bytea']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['jsonb']>;
  page?: InputMaybe<Page_Obj_Rel_Insert_Input>;
  page_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Margin_Max_Fields = {
  __typename?: 'margin_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  page_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "margin" */
export type Margin_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  page_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Margin_Min_Fields = {
  __typename?: 'margin_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  page_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "margin" */
export type Margin_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  page_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "margin" */
export type Margin_Mutation_Response = {
  __typename?: 'margin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Margin>;
};

/** on conflict condition type for table "margin" */
export type Margin_On_Conflict = {
  constraint: Margin_Constraint;
  update_columns?: Array<Margin_Update_Column>;
  where?: InputMaybe<Margin_Bool_Exp>;
};

/** Ordering options when selecting data from "margin". */
export type Margin_Order_By = {
  created_at?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  page?: InputMaybe<Page_Order_By>;
  page_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: margin */
export type Margin_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Margin_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "margin" */
export enum Margin_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Name = 'name',
  /** column name */
  Options = 'options',
  /** column name */
  PageId = 'page_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "margin" */
export type Margin_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  img?: InputMaybe<Scalars['bytea']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['jsonb']>;
  page_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "margin" */
export enum Margin_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Name = 'name',
  /** column name */
  Options = 'options',
  /** column name */
  PageId = 'page_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "author" */
  delete_author?: Maybe<Author_Mutation_Response>;
  /** delete single row from the table: "author" */
  delete_author_by_pk?: Maybe<Author>;
  /** delete data from the table: "draft" */
  delete_draft?: Maybe<Draft_Mutation_Response>;
  /** delete single row from the table: "draft" */
  delete_draft_by_pk?: Maybe<Draft>;
  /** delete data from the table: "margin" */
  delete_margin?: Maybe<Margin_Mutation_Response>;
  /** delete single row from the table: "margin" */
  delete_margin_by_pk?: Maybe<Margin>;
  /** delete data from the table: "note" */
  delete_note?: Maybe<Note_Mutation_Response>;
  /** delete single row from the table: "note" */
  delete_note_by_pk?: Maybe<Note>;
  /** delete data from the table: "online_authors" */
  delete_online_authors?: Maybe<Online_Authors_Mutation_Response>;
  /** delete data from the table: "page" */
  delete_page?: Maybe<Page_Mutation_Response>;
  /** delete single row from the table: "page" */
  delete_page_by_pk?: Maybe<Page>;
  /** insert data into the table: "author" */
  insert_author?: Maybe<Author_Mutation_Response>;
  /** insert a single row into the table: "author" */
  insert_author_one?: Maybe<Author>;
  /** insert data into the table: "draft" */
  insert_draft?: Maybe<Draft_Mutation_Response>;
  /** insert a single row into the table: "draft" */
  insert_draft_one?: Maybe<Draft>;
  /** insert data into the table: "margin" */
  insert_margin?: Maybe<Margin_Mutation_Response>;
  /** insert a single row into the table: "margin" */
  insert_margin_one?: Maybe<Margin>;
  /** insert data into the table: "note" */
  insert_note?: Maybe<Note_Mutation_Response>;
  /** insert a single row into the table: "note" */
  insert_note_one?: Maybe<Note>;
  /** insert data into the table: "online_authors" */
  insert_online_authors?: Maybe<Online_Authors_Mutation_Response>;
  /** insert a single row into the table: "online_authors" */
  insert_online_authors_one?: Maybe<Online_Authors>;
  /** insert data into the table: "page" */
  insert_page?: Maybe<Page_Mutation_Response>;
  /** insert a single row into the table: "page" */
  insert_page_one?: Maybe<Page>;
  /** update data of the table: "author" */
  update_author?: Maybe<Author_Mutation_Response>;
  /** update single row of the table: "author" */
  update_author_by_pk?: Maybe<Author>;
  /** update data of the table: "draft" */
  update_draft?: Maybe<Draft_Mutation_Response>;
  /** update single row of the table: "draft" */
  update_draft_by_pk?: Maybe<Draft>;
  /** update data of the table: "margin" */
  update_margin?: Maybe<Margin_Mutation_Response>;
  /** update single row of the table: "margin" */
  update_margin_by_pk?: Maybe<Margin>;
  /** update data of the table: "note" */
  update_note?: Maybe<Note_Mutation_Response>;
  /** update single row of the table: "note" */
  update_note_by_pk?: Maybe<Note>;
  /** update data of the table: "online_authors" */
  update_online_authors?: Maybe<Online_Authors_Mutation_Response>;
  /** update data of the table: "page" */
  update_page?: Maybe<Page_Mutation_Response>;
  /** update single row of the table: "page" */
  update_page_by_pk?: Maybe<Page>;
};


/** mutation root */
export type Mutation_RootDelete_AuthorArgs = {
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Author_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DraftArgs = {
  where: Draft_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Draft_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MarginArgs = {
  where: Margin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Margin_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NoteArgs = {
  where: Note_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Note_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Online_AuthorsArgs = {
  where: Online_Authors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PageArgs = {
  where: Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Page_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AuthorArgs = {
  objects: Array<Author_Insert_Input>;
  on_conflict?: InputMaybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Author_OneArgs = {
  object: Author_Insert_Input;
  on_conflict?: InputMaybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DraftArgs = {
  objects: Array<Draft_Insert_Input>;
  on_conflict?: InputMaybe<Draft_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Draft_OneArgs = {
  object: Draft_Insert_Input;
  on_conflict?: InputMaybe<Draft_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MarginArgs = {
  objects: Array<Margin_Insert_Input>;
  on_conflict?: InputMaybe<Margin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Margin_OneArgs = {
  object: Margin_Insert_Input;
  on_conflict?: InputMaybe<Margin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NoteArgs = {
  objects: Array<Note_Insert_Input>;
  on_conflict?: InputMaybe<Note_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Note_OneArgs = {
  object: Note_Insert_Input;
  on_conflict?: InputMaybe<Note_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Online_AuthorsArgs = {
  objects: Array<Online_Authors_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Online_Authors_OneArgs = {
  object: Online_Authors_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_PageArgs = {
  objects: Array<Page_Insert_Input>;
  on_conflict?: InputMaybe<Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Page_OneArgs = {
  object: Page_Insert_Input;
  on_conflict?: InputMaybe<Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthorArgs = {
  _set?: InputMaybe<Author_Set_Input>;
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Author_By_PkArgs = {
  _set?: InputMaybe<Author_Set_Input>;
  pk_columns: Author_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DraftArgs = {
  _append?: InputMaybe<Draft_Append_Input>;
  _delete_at_path?: InputMaybe<Draft_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Draft_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Draft_Delete_Key_Input>;
  _prepend?: InputMaybe<Draft_Prepend_Input>;
  _set?: InputMaybe<Draft_Set_Input>;
  where: Draft_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Draft_By_PkArgs = {
  _append?: InputMaybe<Draft_Append_Input>;
  _delete_at_path?: InputMaybe<Draft_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Draft_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Draft_Delete_Key_Input>;
  _prepend?: InputMaybe<Draft_Prepend_Input>;
  _set?: InputMaybe<Draft_Set_Input>;
  pk_columns: Draft_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MarginArgs = {
  _append?: InputMaybe<Margin_Append_Input>;
  _delete_at_path?: InputMaybe<Margin_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Margin_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Margin_Delete_Key_Input>;
  _prepend?: InputMaybe<Margin_Prepend_Input>;
  _set?: InputMaybe<Margin_Set_Input>;
  where: Margin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Margin_By_PkArgs = {
  _append?: InputMaybe<Margin_Append_Input>;
  _delete_at_path?: InputMaybe<Margin_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Margin_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Margin_Delete_Key_Input>;
  _prepend?: InputMaybe<Margin_Prepend_Input>;
  _set?: InputMaybe<Margin_Set_Input>;
  pk_columns: Margin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NoteArgs = {
  _append?: InputMaybe<Note_Append_Input>;
  _delete_at_path?: InputMaybe<Note_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Note_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Note_Delete_Key_Input>;
  _prepend?: InputMaybe<Note_Prepend_Input>;
  _set?: InputMaybe<Note_Set_Input>;
  where: Note_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Note_By_PkArgs = {
  _append?: InputMaybe<Note_Append_Input>;
  _delete_at_path?: InputMaybe<Note_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Note_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Note_Delete_Key_Input>;
  _prepend?: InputMaybe<Note_Prepend_Input>;
  _set?: InputMaybe<Note_Set_Input>;
  pk_columns: Note_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Online_AuthorsArgs = {
  _set?: InputMaybe<Online_Authors_Set_Input>;
  where: Online_Authors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PageArgs = {
  _append?: InputMaybe<Page_Append_Input>;
  _delete_at_path?: InputMaybe<Page_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Page_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Page_Delete_Key_Input>;
  _inc?: InputMaybe<Page_Inc_Input>;
  _prepend?: InputMaybe<Page_Prepend_Input>;
  _set?: InputMaybe<Page_Set_Input>;
  where: Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Page_By_PkArgs = {
  _append?: InputMaybe<Page_Append_Input>;
  _delete_at_path?: InputMaybe<Page_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Page_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Page_Delete_Key_Input>;
  _inc?: InputMaybe<Page_Inc_Input>;
  _prepend?: InputMaybe<Page_Prepend_Input>;
  _set?: InputMaybe<Page_Set_Input>;
  pk_columns: Page_Pk_Columns_Input;
};

/** columns and relationships of "note" */
export type Note = {
  __typename?: 'note';
  /** An object relationship */
  author: Author;
  author_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  draft?: Maybe<Draft>;
  draft_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  preview: Scalars['jsonb'];
  static_link?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "note" */
export type NotePreviewArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "note" */
export type Note_Aggregate = {
  __typename?: 'note_aggregate';
  aggregate?: Maybe<Note_Aggregate_Fields>;
  nodes: Array<Note>;
};

/** aggregate fields of "note" */
export type Note_Aggregate_Fields = {
  __typename?: 'note_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Note_Max_Fields>;
  min?: Maybe<Note_Min_Fields>;
};


/** aggregate fields of "note" */
export type Note_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Note_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "note" */
export type Note_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Note_Max_Order_By>;
  min?: InputMaybe<Note_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Note_Append_Input = {
  preview?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "note" */
export type Note_Arr_Rel_Insert_Input = {
  data: Array<Note_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Note_On_Conflict>;
};

/** Boolean expression to filter rows from the table "note". All fields are combined with a logical 'AND'. */
export type Note_Bool_Exp = {
  _and?: InputMaybe<Array<Note_Bool_Exp>>;
  _not?: InputMaybe<Note_Bool_Exp>;
  _or?: InputMaybe<Array<Note_Bool_Exp>>;
  author?: InputMaybe<Author_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  draft?: InputMaybe<Draft_Bool_Exp>;
  draft_id?: InputMaybe<Uuid_Comparison_Exp>;
  ended_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  preview?: InputMaybe<Jsonb_Comparison_Exp>;
  static_link?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "note" */
export enum Note_Constraint {
  /** unique or primary key constraint */
  NotePkey = 'note_pkey',
  /** unique or primary key constraint */
  UqNoteDraftIdEndedAt = 'uq_note_draft_id_ended_at'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Note_Delete_At_Path_Input = {
  preview?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Note_Delete_Elem_Input = {
  preview?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Note_Delete_Key_Input = {
  preview?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "note" */
export type Note_Insert_Input = {
  author?: InputMaybe<Author_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  draft?: InputMaybe<Draft_Obj_Rel_Insert_Input>;
  draft_id?: InputMaybe<Scalars['uuid']>;
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['jsonb']>;
  static_link?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Note_Max_Fields = {
  __typename?: 'note_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  draft_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  static_link?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "note" */
export type Note_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  draft_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  static_link?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Note_Min_Fields = {
  __typename?: 'note_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  draft_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  static_link?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "note" */
export type Note_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  draft_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  static_link?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "note" */
export type Note_Mutation_Response = {
  __typename?: 'note_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Note>;
};

/** on conflict condition type for table "note" */
export type Note_On_Conflict = {
  constraint: Note_Constraint;
  update_columns?: Array<Note_Update_Column>;
  where?: InputMaybe<Note_Bool_Exp>;
};

/** Ordering options when selecting data from "note". */
export type Note_Order_By = {
  author?: InputMaybe<Author_Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  draft?: InputMaybe<Draft_Order_By>;
  draft_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  preview?: InputMaybe<Order_By>;
  static_link?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: note */
export type Note_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Note_Prepend_Input = {
  preview?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "note" */
export enum Note_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DraftId = 'draft_id',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Preview = 'preview',
  /** column name */
  StaticLink = 'static_link',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "note" */
export type Note_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  draft_id?: InputMaybe<Scalars['uuid']>;
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['jsonb']>;
  static_link?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "note" */
export enum Note_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DraftId = 'draft_id',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Preview = 'preview',
  /** column name */
  StaticLink = 'static_link',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "online_authors" */
export type Online_Authors = {
  __typename?: 'online_authors';
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "online_authors" */
export type Online_Authors_Aggregate = {
  __typename?: 'online_authors_aggregate';
  aggregate?: Maybe<Online_Authors_Aggregate_Fields>;
  nodes: Array<Online_Authors>;
};

/** aggregate fields of "online_authors" */
export type Online_Authors_Aggregate_Fields = {
  __typename?: 'online_authors_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Online_Authors_Max_Fields>;
  min?: Maybe<Online_Authors_Min_Fields>;
};


/** aggregate fields of "online_authors" */
export type Online_Authors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Online_Authors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "online_authors". All fields are combined with a logical 'AND'. */
export type Online_Authors_Bool_Exp = {
  _and?: InputMaybe<Array<Online_Authors_Bool_Exp>>;
  _not?: InputMaybe<Online_Authors_Bool_Exp>;
  _or?: InputMaybe<Array<Online_Authors_Bool_Exp>>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "online_authors" */
export type Online_Authors_Insert_Input = {
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Online_Authors_Max_Fields = {
  __typename?: 'online_authors_max_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Online_Authors_Min_Fields = {
  __typename?: 'online_authors_min_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "online_authors" */
export type Online_Authors_Mutation_Response = {
  __typename?: 'online_authors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Online_Authors>;
};

/** Ordering options when selecting data from "online_authors". */
export type Online_Authors_Order_By = {
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "online_authors" */
export enum Online_Authors_Select_Column {
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "online_authors" */
export type Online_Authors_Set_Input = {
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "page" */
export type Page = {
  __typename?: 'page';
  content?: Maybe<Scalars['jsonb']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  draft: Draft;
  draft_id: Scalars['uuid'];
  ended_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  /** An array relationship */
  margins: Array<Margin>;
  /** An aggregate relationship */
  margins_aggregate: Margin_Aggregate;
  order: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "page" */
export type PageContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "page" */
export type PageMarginsArgs = {
  distinct_on?: InputMaybe<Array<Margin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Margin_Order_By>>;
  where?: InputMaybe<Margin_Bool_Exp>;
};


/** columns and relationships of "page" */
export type PageMargins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Margin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Margin_Order_By>>;
  where?: InputMaybe<Margin_Bool_Exp>;
};

/** aggregated selection of "page" */
export type Page_Aggregate = {
  __typename?: 'page_aggregate';
  aggregate?: Maybe<Page_Aggregate_Fields>;
  nodes: Array<Page>;
};

/** aggregate fields of "page" */
export type Page_Aggregate_Fields = {
  __typename?: 'page_aggregate_fields';
  avg?: Maybe<Page_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Page_Max_Fields>;
  min?: Maybe<Page_Min_Fields>;
  stddev?: Maybe<Page_Stddev_Fields>;
  stddev_pop?: Maybe<Page_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Page_Stddev_Samp_Fields>;
  sum?: Maybe<Page_Sum_Fields>;
  var_pop?: Maybe<Page_Var_Pop_Fields>;
  var_samp?: Maybe<Page_Var_Samp_Fields>;
  variance?: Maybe<Page_Variance_Fields>;
};


/** aggregate fields of "page" */
export type Page_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Page_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "page" */
export type Page_Aggregate_Order_By = {
  avg?: InputMaybe<Page_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Page_Max_Order_By>;
  min?: InputMaybe<Page_Min_Order_By>;
  stddev?: InputMaybe<Page_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Page_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Page_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Page_Sum_Order_By>;
  var_pop?: InputMaybe<Page_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Page_Var_Samp_Order_By>;
  variance?: InputMaybe<Page_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Page_Append_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "page" */
export type Page_Arr_Rel_Insert_Input = {
  data: Array<Page_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Page_On_Conflict>;
};

/** aggregate avg on columns */
export type Page_Avg_Fields = {
  __typename?: 'page_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "page" */
export type Page_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "page". All fields are combined with a logical 'AND'. */
export type Page_Bool_Exp = {
  _and?: InputMaybe<Array<Page_Bool_Exp>>;
  _not?: InputMaybe<Page_Bool_Exp>;
  _or?: InputMaybe<Array<Page_Bool_Exp>>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  draft?: InputMaybe<Draft_Bool_Exp>;
  draft_id?: InputMaybe<Uuid_Comparison_Exp>;
  ended_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  margins?: InputMaybe<Margin_Bool_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "page" */
export enum Page_Constraint {
  /** unique or primary key constraint */
  PagePkey = 'page_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Page_Delete_At_Path_Input = {
  content?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Page_Delete_Elem_Input = {
  content?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Page_Delete_Key_Input = {
  content?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "page" */
export type Page_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "page" */
export type Page_Insert_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  draft?: InputMaybe<Draft_Obj_Rel_Insert_Input>;
  draft_id?: InputMaybe<Scalars['uuid']>;
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  margins?: InputMaybe<Margin_Arr_Rel_Insert_Input>;
  order?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Page_Max_Fields = {
  __typename?: 'page_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  draft_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "page" */
export type Page_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  draft_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Page_Min_Fields = {
  __typename?: 'page_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  draft_id?: Maybe<Scalars['uuid']>;
  ended_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "page" */
export type Page_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  draft_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "page" */
export type Page_Mutation_Response = {
  __typename?: 'page_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Page>;
};

/** input type for inserting object relation for remote table "page" */
export type Page_Obj_Rel_Insert_Input = {
  data: Page_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Page_On_Conflict>;
};

/** on conflict condition type for table "page" */
export type Page_On_Conflict = {
  constraint: Page_Constraint;
  update_columns?: Array<Page_Update_Column>;
  where?: InputMaybe<Page_Bool_Exp>;
};

/** Ordering options when selecting data from "page". */
export type Page_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  draft?: InputMaybe<Draft_Order_By>;
  draft_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  margins_aggregate?: InputMaybe<Margin_Aggregate_Order_By>;
  order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: page */
export type Page_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Page_Prepend_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "page" */
export enum Page_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DraftId = 'draft_id',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "page" */
export type Page_Set_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  draft_id?: InputMaybe<Scalars['uuid']>;
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Page_Stddev_Fields = {
  __typename?: 'page_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "page" */
export type Page_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Page_Stddev_Pop_Fields = {
  __typename?: 'page_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "page" */
export type Page_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Page_Stddev_Samp_Fields = {
  __typename?: 'page_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "page" */
export type Page_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Page_Sum_Fields = {
  __typename?: 'page_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "page" */
export type Page_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "page" */
export enum Page_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DraftId = 'draft_id',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Page_Var_Pop_Fields = {
  __typename?: 'page_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "page" */
export type Page_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Page_Var_Samp_Fields = {
  __typename?: 'page_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "page" */
export type Page_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Page_Variance_Fields = {
  __typename?: 'page_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "page" */
export type Page_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "author" */
  author: Array<Author>;
  /** fetch aggregated fields from the table: "author" */
  author_aggregate: Author_Aggregate;
  /** fetch data from the table: "author" using primary key columns */
  author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "draft" */
  draft: Array<Draft>;
  /** fetch aggregated fields from the table: "draft" */
  draft_aggregate: Draft_Aggregate;
  /** fetch data from the table: "draft" using primary key columns */
  draft_by_pk?: Maybe<Draft>;
  /** fetch data from the table: "margin" */
  margin: Array<Margin>;
  /** fetch aggregated fields from the table: "margin" */
  margin_aggregate: Margin_Aggregate;
  /** fetch data from the table: "margin" using primary key columns */
  margin_by_pk?: Maybe<Margin>;
  /** fetch data from the table: "note" */
  note: Array<Note>;
  /** fetch aggregated fields from the table: "note" */
  note_aggregate: Note_Aggregate;
  /** fetch data from the table: "note" using primary key columns */
  note_by_pk?: Maybe<Note>;
  /** fetch data from the table: "online_authors" */
  online_authors: Array<Online_Authors>;
  /** fetch aggregated fields from the table: "online_authors" */
  online_authors_aggregate: Online_Authors_Aggregate;
  /** fetch data from the table: "page" */
  page: Array<Page>;
  /** fetch aggregated fields from the table: "page" */
  page_aggregate: Page_Aggregate;
  /** fetch data from the table: "page" using primary key columns */
  page_by_pk?: Maybe<Page>;
};


export type Query_RootAuthorArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Query_RootAuthor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Query_RootAuthor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDraftArgs = {
  distinct_on?: InputMaybe<Array<Draft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Draft_Order_By>>;
  where?: InputMaybe<Draft_Bool_Exp>;
};


export type Query_RootDraft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Draft_Order_By>>;
  where?: InputMaybe<Draft_Bool_Exp>;
};


export type Query_RootDraft_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMarginArgs = {
  distinct_on?: InputMaybe<Array<Margin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Margin_Order_By>>;
  where?: InputMaybe<Margin_Bool_Exp>;
};


export type Query_RootMargin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Margin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Margin_Order_By>>;
  where?: InputMaybe<Margin_Bool_Exp>;
};


export type Query_RootMargin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNoteArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


export type Query_RootNote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


export type Query_RootNote_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOnline_AuthorsArgs = {
  distinct_on?: InputMaybe<Array<Online_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Authors_Order_By>>;
  where?: InputMaybe<Online_Authors_Bool_Exp>;
};


export type Query_RootOnline_Authors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Online_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Authors_Order_By>>;
  where?: InputMaybe<Online_Authors_Bool_Exp>;
};


export type Query_RootPageArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};


export type Query_RootPage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};


export type Query_RootPage_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "author" */
  author: Array<Author>;
  /** fetch aggregated fields from the table: "author" */
  author_aggregate: Author_Aggregate;
  /** fetch data from the table: "author" using primary key columns */
  author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "draft" */
  draft: Array<Draft>;
  /** fetch aggregated fields from the table: "draft" */
  draft_aggregate: Draft_Aggregate;
  /** fetch data from the table: "draft" using primary key columns */
  draft_by_pk?: Maybe<Draft>;
  /** fetch data from the table: "margin" */
  margin: Array<Margin>;
  /** fetch aggregated fields from the table: "margin" */
  margin_aggregate: Margin_Aggregate;
  /** fetch data from the table: "margin" using primary key columns */
  margin_by_pk?: Maybe<Margin>;
  /** fetch data from the table: "note" */
  note: Array<Note>;
  /** fetch aggregated fields from the table: "note" */
  note_aggregate: Note_Aggregate;
  /** fetch data from the table: "note" using primary key columns */
  note_by_pk?: Maybe<Note>;
  /** fetch data from the table: "online_authors" */
  online_authors: Array<Online_Authors>;
  /** fetch aggregated fields from the table: "online_authors" */
  online_authors_aggregate: Online_Authors_Aggregate;
  /** fetch data from the table: "page" */
  page: Array<Page>;
  /** fetch aggregated fields from the table: "page" */
  page_aggregate: Page_Aggregate;
  /** fetch data from the table: "page" using primary key columns */
  page_by_pk?: Maybe<Page>;
};


export type Subscription_RootAuthorArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Subscription_RootAuthor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Subscription_RootAuthor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDraftArgs = {
  distinct_on?: InputMaybe<Array<Draft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Draft_Order_By>>;
  where?: InputMaybe<Draft_Bool_Exp>;
};


export type Subscription_RootDraft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Draft_Order_By>>;
  where?: InputMaybe<Draft_Bool_Exp>;
};


export type Subscription_RootDraft_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMarginArgs = {
  distinct_on?: InputMaybe<Array<Margin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Margin_Order_By>>;
  where?: InputMaybe<Margin_Bool_Exp>;
};


export type Subscription_RootMargin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Margin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Margin_Order_By>>;
  where?: InputMaybe<Margin_Bool_Exp>;
};


export type Subscription_RootMargin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNoteArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


export type Subscription_RootNote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Note_Order_By>>;
  where?: InputMaybe<Note_Bool_Exp>;
};


export type Subscription_RootNote_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOnline_AuthorsArgs = {
  distinct_on?: InputMaybe<Array<Online_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Authors_Order_By>>;
  where?: InputMaybe<Online_Authors_Bool_Exp>;
};


export type Subscription_RootOnline_Authors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Online_Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Authors_Order_By>>;
  where?: InputMaybe<Online_Authors_Bool_Exp>;
};


export type Subscription_RootPageArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};


export type Subscription_RootPage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Page_Order_By>>;
  where?: InputMaybe<Page_Bool_Exp>;
};


export type Subscription_RootPage_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type FindAuthorByAuth0QueryVariables = Exact<{
  auth0_id: Scalars['String'];
}>;


export type FindAuthorByAuth0Query = { __typename?: 'query_root', author: Array<{ __typename?: 'author', id: any, email: string, name?: string | null | undefined, last_seen: any, created_at: any }> };

export type GetAllDraftsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDraftsQuery = { __typename?: 'query_root', drafts: Array<{ __typename?: 'draft', id: any, created_at: any, updated_at: any, pages: Array<{ __typename?: 'page', content?: any | null | undefined }>, author: { __typename?: 'author', id: any, email: string, name?: string | null | undefined }, notes: Array<{ __typename?: 'note', static_link?: string | null | undefined }> }> };

export type GetDraftByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetDraftByIdQuery = { __typename?: 'query_root', draft?: { __typename?: 'draft', id: any, created_at: any, updated_at: any, table_of_contents: any, notes: Array<{ __typename?: 'note', id: any }>, pages: Array<{ __typename?: 'page', id: any, content?: any | null | undefined, order: number, margins: Array<{ __typename?: 'margin', id: any, name?: string | null | undefined }> }> } | null | undefined };

export type UpdateDraftTocMutationVariables = Exact<{
  id: Scalars['uuid'];
  table_of_contents: Scalars['jsonb'];
  updated_at: Scalars['timestamptz'];
}>;


export type UpdateDraftTocMutation = { __typename?: 'mutation_root', update_draft_by_pk?: { __typename?: 'draft', table_of_contents: any, updated_at: any, id: any } | null | undefined };

export type CreateNewDraftMutationVariables = Exact<{
  author_id?: InputMaybe<Scalars['uuid']>;
  content?: InputMaybe<Scalars['jsonb']>;
}>;


export type CreateNewDraftMutation = { __typename?: 'mutation_root', insert_draft_one?: { __typename?: 'draft', id: any, pages: Array<{ __typename?: 'page', id: any, content?: any | null | undefined }> } | null | undefined };

export type DeleteDraftByIdMutationVariables = Exact<{
  id: Scalars['uuid'];
  ended_at?: InputMaybe<Scalars['timestamptz']>;
}>;


export type DeleteDraftByIdMutation = { __typename?: 'mutation_root', update_draft_by_pk?: { __typename?: 'draft', id: any } | null | undefined };

export type GetMarginByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetMarginByIdQuery = { __typename?: 'query_root', margin?: { __typename?: 'margin', id: any, img?: any | null | undefined, imgBase64?: string | null | undefined, options?: any | null | undefined, pageId: any } | null | undefined };

export type CreateMarginMutationVariables = Exact<{
  page_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
}>;


export type CreateMarginMutation = { __typename?: 'mutation_root', insert_margin_one?: { __typename?: 'margin', id: any } | null | undefined };

export type SaveMarginMutationVariables = Exact<{
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  options: Scalars['jsonb'];
  img: Scalars['bytea'];
  name?: InputMaybe<Scalars['String']>;
}>;


export type SaveMarginMutation = { __typename?: 'mutation_root', update_margin_by_pk?: { __typename?: 'margin', updated_at?: any | null | undefined, id: any } | null | undefined };

export type GetAllNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNotesQuery = { __typename?: 'query_root', notes: Array<{ __typename?: 'note', id: any, name: string, preview: any, draft_id?: any | null | undefined, static_link?: string | null | undefined, updated_at?: any | null | undefined, created_at: any, author: { __typename?: 'author', id: any, name?: string | null | undefined, email: string } }> };

export type CreateNodeMutationVariables = Exact<{
  author_id: Scalars['uuid'];
  created_at?: InputMaybe<Scalars['timestamptz']>;
  draft_id: Scalars['uuid'];
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  preview?: InputMaybe<Scalars['jsonb']>;
  static_link?: InputMaybe<Scalars['String']>;
}>;


export type CreateNodeMutation = { __typename?: 'mutation_root', insert_note_one?: { __typename?: 'note', id: any, updated_at?: any | null | undefined, created_at: any } | null | undefined };

export type UpdateNodeMutationVariables = Exact<{
  id: Scalars['uuid'];
  ended_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['jsonb']>;
  static_link?: InputMaybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
}>;


export type UpdateNodeMutation = { __typename?: 'mutation_root', update_note_by_pk?: { __typename?: 'note', id: any, updated_at?: any | null | undefined, created_at: any } | null | undefined };

export type UpdatePageByIdMutationVariables = Exact<{
  id: Scalars['uuid'];
  content: Scalars['jsonb'];
  updated_at: Scalars['timestamptz'];
}>;


export type UpdatePageByIdMutation = { __typename?: 'mutation_root', update_page_by_pk?: { __typename?: 'page', id: any } | null | undefined };

export type AddPageToDraftMutationVariables = Exact<{
  created_at: Scalars['timestamptz'];
  draft_id: Scalars['uuid'];
  order: Scalars['Int'];
}>;


export type AddPageToDraftMutation = { __typename?: 'mutation_root', update_page?: { __typename?: 'page_mutation_response', returning: Array<{ __typename?: 'page', id: any, order: number }> } | null | undefined, insert_page_one?: { __typename?: 'page', id: any, order: number, content?: any | null | undefined, margins: Array<{ __typename?: 'margin', id: any }> } | null | undefined };

export type DeletePageMutationVariables = Exact<{
  id: Scalars['uuid'];
  ended_at: Scalars['timestamptz'];
  draft_id: Scalars['uuid'];
  order: Scalars['Int'];
}>;


export type DeletePageMutation = { __typename?: 'mutation_root', update_page_by_pk?: { __typename?: 'page', id: any } | null | undefined, update_page?: { __typename?: 'page_mutation_response', returning: Array<{ __typename?: 'page', id: any, order: number }> } | null | undefined };


export const FindAuthorByAuth0Document = gql`
    query findAuthorByAuth0($auth0_id: String!) {
  author(where: {auth0_id: {_eq: $auth0_id}}) {
    id
    email
    name
    last_seen
    created_at
  }
}
    `;
export const GetAllDraftsDocument = gql`
    query getAllDrafts {
  drafts: draft(order_by: {updated_at: desc}, where: {ended_at: {_is_null: true}}) {
    id
    pages(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
      content
    }
    created_at
    updated_at
    author {
      id
      email
      name
    }
    notes(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
      static_link
    }
  }
}
    `;
export const GetDraftByIdDocument = gql`
    query getDraftById($id: uuid!) {
  draft: draft_by_pk(id: $id) {
    id
    created_at
    updated_at
    table_of_contents
    notes(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
      id
    }
    pages(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
      id
      content
      order
      margins(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
        id
        name
      }
    }
  }
}
    `;
export const UpdateDraftTocDocument = gql`
    mutation updateDraftTOC($id: uuid!, $table_of_contents: jsonb!, $updated_at: timestamptz!) {
  update_draft_by_pk(
    pk_columns: {id: $id}
    _set: {table_of_contents: $table_of_contents, updated_at: $updated_at}
  ) {
    table_of_contents
    updated_at
    id
  }
}
    `;
export const CreateNewDraftDocument = gql`
    mutation createNewDraft($author_id: uuid, $content: jsonb) {
  insert_draft_one(
    object: {author_id: $author_id, pages: {data: {content: $content}}}
  ) {
    id
    pages {
      id
      content
    }
  }
}
    `;
export const DeleteDraftByIdDocument = gql`
    mutation deleteDraftById($id: uuid!, $ended_at: timestamptz) {
  update_draft_by_pk(pk_columns: {id: $id}, _set: {ended_at: $ended_at}) {
    id
  }
}
    `;
export const GetMarginByIdDocument = gql`
    query getMarginById($id: uuid!) {
  margin: margin_by_pk(id: $id) {
    id
    pageId: page_id
    img
    imgBase64
    options
  }
}
    `;
export const CreateMarginDocument = gql`
    mutation createMargin($page_id: uuid!, $created_at: timestamptz!) {
  insert_margin_one(object: {page_id: $page_id, created_at: $created_at}) {
    id
  }
}
    `;
export const SaveMarginDocument = gql`
    mutation saveMargin($id: uuid!, $updated_at: timestamptz!, $options: jsonb!, $img: bytea!, $name: String) {
  update_margin_by_pk(
    pk_columns: {id: $id}
    _set: {updated_at: $updated_at, options: $options, img: $img, name: $name}
  ) {
    updated_at
    id
  }
}
    `;
export const GetAllNotesDocument = gql`
    query getAllNotes {
  notes: note(order_by: {created_at: desc}, where: {ended_at: {_is_null: true}}) {
    id
    name
    preview
    draft_id
    static_link
    updated_at
    created_at
    author {
      id
      name
      email
    }
  }
}
    `;
export const CreateNodeDocument = gql`
    mutation createNode($author_id: uuid!, $created_at: timestamptz, $draft_id: uuid!, $ended_at: timestamptz, $name: String!, $preview: jsonb, $static_link: String) {
  insert_note_one(
    object: {author_id: $author_id, created_at: $created_at, draft_id: $draft_id, ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link}
  ) {
    id
    updated_at
    created_at
  }
}
    `;
export const UpdateNodeDocument = gql`
    mutation updateNode($id: uuid!, $ended_at: timestamptz, $name: String, $preview: jsonb, $static_link: String, $updated_at: timestamptz!) {
  update_note_by_pk(
    pk_columns: {id: $id}
    _set: {ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link, updated_at: $updated_at}
  ) {
    id
    updated_at
    created_at
  }
}
    `;
export const UpdatePageByIdDocument = gql`
    mutation updatePageById($id: uuid!, $content: jsonb!, $updated_at: timestamptz!) {
  update_page_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, updated_at: $updated_at}
  ) {
    id
  }
}
    `;
export const AddPageToDraftDocument = gql`
    mutation addPageToDraft($created_at: timestamptz!, $draft_id: uuid!, $order: Int!) {
  update_page(
    where: {draft_id: {_eq: $draft_id}, ended_at: {_is_null: true}, order: {_gte: $order}}
    _inc: {order: 1}
  ) {
    returning {
      id
      order
    }
  }
  insert_page_one(
    object: {created_at: $created_at, draft_id: $draft_id, order: $order}
  ) {
    id
    order
    content
    margins {
      id
    }
  }
}
    `;
export const DeletePageDocument = gql`
    mutation deletePage($id: uuid!, $ended_at: timestamptz!, $draft_id: uuid!, $order: Int!) {
  update_page_by_pk(pk_columns: {id: $id}, _set: {ended_at: $ended_at}) {
    id
  }
  update_page(
    where: {draft_id: {_eq: $draft_id}, ended_at: {_is_null: true}, order: {_gte: $order}}
    _inc: {order: -1}
  ) {
    returning {
      id
      order
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findAuthorByAuth0(variables: FindAuthorByAuth0QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAuthorByAuth0Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAuthorByAuth0Query>(FindAuthorByAuth0Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAuthorByAuth0');
    },
    getAllDrafts(variables?: GetAllDraftsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllDraftsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllDraftsQuery>(GetAllDraftsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllDrafts');
    },
    getDraftById(variables: GetDraftByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDraftByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDraftByIdQuery>(GetDraftByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDraftById');
    },
    updateDraftTOC(variables: UpdateDraftTocMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDraftTocMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDraftTocMutation>(UpdateDraftTocDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDraftTOC');
    },
    createNewDraft(variables?: CreateNewDraftMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateNewDraftMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateNewDraftMutation>(CreateNewDraftDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createNewDraft');
    },
    deleteDraftById(variables: DeleteDraftByIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteDraftByIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteDraftByIdMutation>(DeleteDraftByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteDraftById');
    },
    getMarginById(variables: GetMarginByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMarginByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMarginByIdQuery>(GetMarginByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMarginById');
    },
    createMargin(variables: CreateMarginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateMarginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateMarginMutation>(CreateMarginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createMargin');
    },
    saveMargin(variables: SaveMarginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveMarginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveMarginMutation>(SaveMarginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'saveMargin');
    },
    getAllNotes(variables?: GetAllNotesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllNotesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllNotesQuery>(GetAllNotesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllNotes');
    },
    createNode(variables: CreateNodeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateNodeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateNodeMutation>(CreateNodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createNode');
    },
    updateNode(variables: UpdateNodeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateNodeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateNodeMutation>(UpdateNodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateNode');
    },
    updatePageById(variables: UpdatePageByIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdatePageByIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePageByIdMutation>(UpdatePageByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatePageById');
    },
    addPageToDraft(variables: AddPageToDraftMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddPageToDraftMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddPageToDraftMutation>(AddPageToDraftDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addPageToDraft');
    },
    deletePage(variables: DeletePageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeletePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePageMutation>(DeletePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deletePage');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;