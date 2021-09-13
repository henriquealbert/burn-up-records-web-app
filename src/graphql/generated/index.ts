import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions
} from 'react-query'
import { myFetcher } from './fetcher'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: Date
  Upload: unknown
}

export type AuthInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type AuthType = {
  __typename?: 'AuthType'
  token: Scalars['String']
  user: User
}

export type CreateReleaseInput = {
  artworkUrl: Scalars['String']
  catalog: Scalars['String']
  contract?: Maybe<Scalars['Boolean']>
  date: Scalars['DateTime']
  description: Scalars['String']
  name: Scalars['String']
  notes?: Maybe<Scalars['String']>
  royalty?: Maybe<Royalty>
  status: Status
  type: Type
  userId: Scalars['String']
}

export type CreateTrackInput = {
  EAN?: Maybe<Scalars['String']>
  ISRC?: Maybe<Scalars['String']>
  artists: Scalars['String']
  genre: Scalars['String']
  mixName: Scalars['String']
  name: Scalars['String']
  releaseId: Scalars['String']
  remixer?: Maybe<Scalars['String']>
  url: Scalars['String']
}

export type CreateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  name?: Maybe<Scalars['String']>
  onboardingCompleted?: Maybe<Scalars['Boolean']>
  password: Scalars['String']
  plan?: Maybe<Plan>
}

export type Mutation = {
  __typename?: 'Mutation'
  createRelease: Release
  createTrack: Track
  createUser: User
  deleteFile: Scalars['Boolean']
  deleteRelease: Release
  deleteTrack: Track
  deleteUser: User
  login: AuthType
  updateRelease: Release
  updateTrack: Track
  updateUser: User
  uploadFile: Scalars['String']
}

export type MutationCreateReleaseArgs = {
  data: CreateReleaseInput
}

export type MutationCreateTrackArgs = {
  data: CreateTrackInput
}

export type MutationCreateUserArgs = {
  data: CreateUserInput
}

export type MutationDeleteFileArgs = {
  fileName: Scalars['String']
}

export type MutationDeleteReleaseArgs = {
  id: Scalars['String']
}

export type MutationDeleteTrackArgs = {
  id: Scalars['String']
}

export type MutationDeleteUserArgs = {
  id: Scalars['String']
}

export type MutationLoginArgs = {
  data: AuthInput
}

export type MutationUpdateReleaseArgs = {
  data: UpdateReleaseInput
  id: Scalars['String']
}

export type MutationUpdateTrackArgs = {
  data: UpdateTrackInput
  id: Scalars['String']
}

export type MutationUpdateUserArgs = {
  data: UpdateUserInput
  id: Scalars['String']
}

export type MutationUploadFileArgs = {
  file: Scalars['Upload']
}

export enum Plan {
  Free = 'FREE',
  Premium = 'PREMIUM'
}

export type Query = {
  __typename?: 'Query'
  me: User
  release: Release
  releases: Array<Release>
  releasesByUserId: Array<Release>
  track: Track
  tracks: Array<Track>
  user: User
  userByEmail: User
  users: Array<User>
}

export type QueryReleaseArgs = {
  id: Scalars['String']
}

export type QueryReleasesByUserIdArgs = {
  userId: Scalars['String']
}

export type QueryTrackArgs = {
  id: Scalars['String']
}

export type QueryUserArgs = {
  id: Scalars['String']
}

export type QueryUserByEmailArgs = {
  email: Scalars['String']
}

export type Release = {
  __typename?: 'Release'
  artworkUrl: Scalars['String']
  catalog: Scalars['String']
  contract?: Maybe<Scalars['Boolean']>
  date: Scalars['DateTime']
  description: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  notes?: Maybe<Scalars['String']>
  royalty?: Maybe<Royalty>
  status: Status
  tracks: Array<Track>
  type: Type
  user: User
  userId: Scalars['String']
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum Royalty {
  All = 'ALL',
  Half = 'HALF',
  Standard = 'STANDARD'
}

export enum Status {
  Analise = 'ANALISE',
  Aprovado = 'APROVADO',
  Corrigir = 'CORRIGIR',
  Lancado = 'LANCADO',
  Reprovado = 'REPROVADO'
}

export type Track = {
  __typename?: 'Track'
  EAN?: Maybe<Scalars['String']>
  ISRC?: Maybe<Scalars['String']>
  artists: Scalars['String']
  genre: Scalars['String']
  id: Scalars['ID']
  mixName: Scalars['String']
  name: Scalars['String']
  release: Release
  releaseId: Scalars['String']
  remixer?: Maybe<Scalars['String']>
  url: Scalars['String']
}

export enum Type {
  Album = 'ALBUM',
  Ep = 'EP',
  Single = 'SINGLE'
}

export type UpdateReleaseInput = {
  artworkUrl?: Maybe<Scalars['String']>
  catalog?: Maybe<Scalars['String']>
  contract?: Maybe<Scalars['Boolean']>
  date?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  royalty?: Maybe<Royalty>
  status?: Maybe<Status>
  type?: Maybe<Type>
  userId?: Maybe<Scalars['String']>
}

export type UpdateTrackInput = {
  EAN?: Maybe<Scalars['String']>
  ISRC?: Maybe<Scalars['String']>
  artists?: Maybe<Scalars['String']>
  genre?: Maybe<Scalars['String']>
  mixName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  releaseId?: Maybe<Scalars['String']>
  remixer?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type UpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  onboardingCompleted?: Maybe<Scalars['Boolean']>
  password?: Maybe<Scalars['String']>
  plan?: Maybe<Plan>
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  onboardingCompleted?: Maybe<Scalars['Boolean']>
  plan: Plan
  releases: Array<Release>
  role: Role
}

export type ReleaseFragmentFragment = {
  __typename?: 'Release'
  id: string
  name: string
  date: Date
  type: Type
  notes?: Maybe<string>
  userId: string
  status: Status
  royalty?: Maybe<Royalty>
  catalog: string
  contract?: Maybe<boolean>
  artworkUrl: string
  description: string
}

export type UserFragmentFragment = {
  __typename?: 'User'
  id: string
  name?: Maybe<string>
  role: Role
  plan: Plan
  email: string
  avatarUrl?: Maybe<string>
  onboardingCompleted?: Maybe<boolean>
}

export type CreateReleaseMutationVariables = Exact<{
  data: CreateReleaseInput
}>

export type CreateReleaseMutation = {
  __typename?: 'Mutation'
  createRelease: {
    __typename?: 'Release'
    id: string
    name: string
    date: Date
    type: Type
    notes?: Maybe<string>
    userId: string
    status: Status
    royalty?: Maybe<Royalty>
    catalog: string
    contract?: Maybe<boolean>
    artworkUrl: string
    description: string
  }
}

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: {
    __typename?: 'User'
    id: string
    name?: Maybe<string>
    role: Role
    plan: Plan
    email: string
    avatarUrl?: Maybe<string>
    onboardingCompleted?: Maybe<boolean>
  }
}

export type LoginMutationVariables = Exact<{
  data: AuthInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'AuthType'
    token: string
    user: {
      __typename?: 'User'
      id: string
      name?: Maybe<string>
      role: Role
      plan: Plan
      email: string
      avatarUrl?: Maybe<string>
      onboardingCompleted?: Maybe<boolean>
    }
  }
}

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput
  id: Scalars['String']
}>

export type UpdateUserMutation = {
  __typename?: 'Mutation'
  updateUser: {
    __typename?: 'User'
    id: string
    name?: Maybe<string>
    role: Role
    plan: Plan
    email: string
    avatarUrl?: Maybe<string>
    onboardingCompleted?: Maybe<boolean>
  }
}

export type GetMeQueryVariables = Exact<{ [key: string]: never }>

export type GetMeQuery = {
  __typename?: 'Query'
  me: {
    __typename?: 'User'
    id: string
    name?: Maybe<string>
    role: Role
    plan: Plan
    email: string
    avatarUrl?: Maybe<string>
    onboardingCompleted?: Maybe<boolean>
  }
}

export type GetReleasesByUserIdQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type GetReleasesByUserIdQuery = {
  __typename?: 'Query'
  releasesByUserId: Array<{
    __typename?: 'Release'
    id: string
    name: string
    date: Date
    type: Type
    notes?: Maybe<string>
    userId: string
    status: Status
    royalty?: Maybe<Royalty>
    catalog: string
    contract?: Maybe<boolean>
    artworkUrl: string
    description: string
  }>
}

export const ReleaseFragmentFragmentDoc = `
    fragment ReleaseFragment on Release {
  id
  name
  date
  type
  notes
  userId
  status
  royalty
  catalog
  contract
  artworkUrl
  description
}
    `
export const UserFragmentFragmentDoc = `
    fragment UserFragment on User {
  id
  name
  role
  plan
  email
  avatarUrl
  onboardingCompleted
}
    `
export const CreateReleaseDocument = `
    mutation createRelease($data: CreateReleaseInput!) {
  createRelease(data: $data) {
    ...ReleaseFragment
  }
}
    ${ReleaseFragmentFragmentDoc}`
export const useCreateReleaseMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateReleaseMutation,
    TError,
    CreateReleaseMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateReleaseMutation,
    TError,
    CreateReleaseMutationVariables,
    TContext
  >(
    (variables?: CreateReleaseMutationVariables) =>
      myFetcher<CreateReleaseMutation, CreateReleaseMutationVariables>(
        CreateReleaseDocument,
        variables
      )(),
    options
  )
export const CreateUserDocument = `
    mutation createUser($data: CreateUserInput!) {
  createUser(data: $data) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >(
    (variables?: CreateUserMutationVariables) =>
      myFetcher<CreateUserMutation, CreateUserMutationVariables>(
        CreateUserDocument,
        variables
      )(),
    options
  )
export const LoginDocument = `
    mutation login($data: AuthInput!) {
  login(data: $data) {
    token
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    (variables?: LoginMutationVariables) =>
      myFetcher<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        variables
      )(),
    options
  )
export const UpdateUserDocument = `
    mutation updateUser($data: UpdateUserInput!, $id: String!) {
  updateUser(data: $data, id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >(
    (variables?: UpdateUserMutationVariables) =>
      myFetcher<UpdateUserMutation, UpdateUserMutationVariables>(
        UpdateUserDocument,
        variables
      )(),
    options
  )
export const GetMeDocument = `
    query getMe {
  me {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`
export const useGetMeQuery = <TData = GetMeQuery, TError = unknown>(
  variables?: GetMeQueryVariables,
  options?: UseQueryOptions<GetMeQuery, TError, TData>
) =>
  useQuery<GetMeQuery, TError, TData>(
    variables === undefined ? ['getMe'] : ['getMe', variables],
    myFetcher<GetMeQuery, GetMeQueryVariables>(GetMeDocument, variables),
    options
  )
export const GetReleasesByUserIdDocument = `
    query getReleasesByUserId($userId: String!) {
  releasesByUserId(userId: $userId) {
    ...ReleaseFragment
  }
}
    ${ReleaseFragmentFragmentDoc}`
export const useGetReleasesByUserIdQuery = <
  TData = GetReleasesByUserIdQuery,
  TError = unknown
>(
  variables: GetReleasesByUserIdQueryVariables,
  options?: UseQueryOptions<GetReleasesByUserIdQuery, TError, TData>
) =>
  useQuery<GetReleasesByUserIdQuery, TError, TData>(
    ['getReleasesByUserId', variables],
    myFetcher<GetReleasesByUserIdQuery, GetReleasesByUserIdQueryVariables>(
      GetReleasesByUserIdDocument,
      variables
    ),
    options
  )
