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
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: Date
  DateTime: Date
  JSON: unknown
  Long: unknown
  Time: string
  Upload: unknown
}

export type AdminUser = {
  __typename?: 'AdminUser'
  id: Scalars['ID']
  username?: Maybe<Scalars['String']>
  firstname: Scalars['String']
  lastname: Scalars['String']
}

export type ComponentSocialSocialLinkInput = {
  instagram?: Maybe<Scalars['String']>
  soundcloud?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  beatport?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
}

export type ComponentSocialSocialLinks = {
  __typename?: 'ComponentSocialSocialLinks'
  id: Scalars['ID']
  instagram?: Maybe<Scalars['String']>
  soundcloud?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  beatport?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
}

export enum Enum_Release_Status {
  Analise = 'analise',
  Aprovado = 'aprovado',
  Corrigir = 'corrigir',
  Negado = 'negado',
  Lancado = 'lancado'
}

export enum Enum_Release_Type {
  Single = 'single',
  Ep = 'ep',
  Album = 'album'
}

export enum Enum_Track_Genre {
  House = 'house',
  TechHouse = 'tech_house',
  DeepHouse = 'deep_house'
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
}

export type FileInput = {
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
}

export type InputId = {
  id: Scalars['ID']
}

export type LocaleInput = {
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | Release
  | ReleaseConnection
  | ReleaseAggregator
  | ReleaseGroupBy
  | ReleaseConnectionId
  | ReleaseConnectionCreated_At
  | ReleaseConnectionUpdated_At
  | ReleaseConnectionName
  | ReleaseConnectionDate
  | ReleaseConnectionType
  | ReleaseConnectionLicensing_Usage
  | ReleaseConnectionDescription
  | ReleaseConnectionArtwork
  | ReleaseConnectionProduced_By
  | ReleaseConnectionVocalist
  | ReleaseConnectionAll_Royalties
  | ReleaseConnectionTerm_Contract
  | ReleaseConnectionStatus
  | ReleaseConnectionCatalog
  | ReleaseConnectionUser
  | ReleaseConnectionNotes
  | CreateReleasePayload
  | UpdateReleasePayload
  | DeleteReleasePayload
  | Track
  | TrackConnection
  | TrackAggregator
  | TrackGroupBy
  | TrackConnectionId
  | TrackConnectionCreated_At
  | TrackConnectionUpdated_At
  | TrackConnectionName
  | TrackConnectionMix_Name
  | TrackConnectionGenre
  | TrackConnectionUrl
  | TrackConnectionIsrc
  | TrackConnectionEan_Upc
  | TrackConnectionRelease
  | TrackConnectionTrack_Artist
  | TrackConnectionRemixer_Name
  | CreateTrackPayload
  | UpdateTrackPayload
  | DeleteTrackPayload
  | I18NLocale
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnectionCreated_At
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | DeleteFilePayload
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionArtist_Name
  | UsersPermissionsUserConnectionAvatar
  | UsersPermissionsUserConnectionBiography
  | UsersPermissionsUserConnectionSocial_Links
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload
  | ComponentSocialSocialLinks

export type Mutation = {
  __typename?: 'Mutation'
  createRelease?: Maybe<CreateReleasePayload>
  updateRelease?: Maybe<UpdateReleasePayload>
  deleteRelease?: Maybe<DeleteReleasePayload>
  createTrack?: Maybe<CreateTrackPayload>
  updateTrack?: Maybe<UpdateTrackPayload>
  deleteTrack?: Maybe<DeleteTrackPayload>
  deleteFile?: Maybe<DeleteFilePayload>
  createRole?: Maybe<CreateRolePayload>
  updateRole?: Maybe<UpdateRolePayload>
  deleteRole?: Maybe<DeleteRolePayload>
  createUser?: Maybe<CreateUserPayload>
  updateUser?: Maybe<UpdateUserPayload>
  deleteUser?: Maybe<DeleteUserPayload>
  upload: UploadFile
  multipleUpload: Array<Maybe<UploadFile>>
  updateFileInfo: UploadFile
  login: UsersPermissionsLoginPayload
  register: UsersPermissionsLoginPayload
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
}

export type MutationCreateReleaseArgs = {
  input?: Maybe<CreateReleaseInput>
}

export type MutationUpdateReleaseArgs = {
  input?: Maybe<UpdateReleaseInput>
}

export type MutationDeleteReleaseArgs = {
  input?: Maybe<DeleteReleaseInput>
}

export type MutationCreateTrackArgs = {
  input?: Maybe<CreateTrackInput>
}

export type MutationUpdateTrackArgs = {
  input?: Maybe<UpdateTrackInput>
}

export type MutationDeleteTrackArgs = {
  input?: Maybe<DeleteTrackInput>
}

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>
}

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
}

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
}

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
}

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
}

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
}

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
}

export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  info?: Maybe<FileInfoInput>
  file: Scalars['Upload']
}

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  files: Array<Maybe<Scalars['Upload']>>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info: FileInfoInput
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
  code: Scalars['String']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query'
  release?: Maybe<Release>
  releases?: Maybe<Array<Maybe<Release>>>
  releasesConnection?: Maybe<ReleaseConnection>
  track?: Maybe<Track>
  tracks?: Maybe<Array<Maybe<Track>>>
  tracksConnection?: Maybe<TrackConnection>
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  role?: Maybe<UsersPermissionsRole>
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
  me?: Maybe<UsersPermissionsMe>
}

export type QueryReleaseArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryReleasesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryReleasesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryTrackArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryTracksArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryTracksConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryUserArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type Release = {
  __typename?: 'Release'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name: Scalars['String']
  date?: Maybe<Scalars['Date']>
  type?: Maybe<Enum_Release_Type>
  licensing_usage?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  artwork?: Maybe<UploadFile>
  produced_by?: Maybe<Scalars['String']>
  vocalist?: Maybe<Scalars['String']>
  all_royalties?: Maybe<Scalars['Boolean']>
  term_contract?: Maybe<Scalars['Boolean']>
  status?: Maybe<Enum_Release_Status>
  catalog?: Maybe<Scalars['String']>
  user?: Maybe<UsersPermissionsUser>
  notes?: Maybe<Scalars['String']>
  tracks?: Maybe<Array<Maybe<Track>>>
}

export type ReleaseTracksArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ReleaseAggregator = {
  __typename?: 'ReleaseAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ReleaseConnection = {
  __typename?: 'ReleaseConnection'
  values?: Maybe<Array<Maybe<Release>>>
  groupBy?: Maybe<ReleaseGroupBy>
  aggregate?: Maybe<ReleaseAggregator>
}

export type ReleaseConnectionAll_Royalties = {
  __typename?: 'ReleaseConnectionAll_royalties'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionArtwork = {
  __typename?: 'ReleaseConnectionArtwork'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionCatalog = {
  __typename?: 'ReleaseConnectionCatalog'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionCreated_At = {
  __typename?: 'ReleaseConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionDate = {
  __typename?: 'ReleaseConnectionDate'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionDescription = {
  __typename?: 'ReleaseConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionId = {
  __typename?: 'ReleaseConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionLicensing_Usage = {
  __typename?: 'ReleaseConnectionLicensing_usage'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionName = {
  __typename?: 'ReleaseConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionNotes = {
  __typename?: 'ReleaseConnectionNotes'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionProduced_By = {
  __typename?: 'ReleaseConnectionProduced_by'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionStatus = {
  __typename?: 'ReleaseConnectionStatus'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionTerm_Contract = {
  __typename?: 'ReleaseConnectionTerm_contract'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionType = {
  __typename?: 'ReleaseConnectionType'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionUpdated_At = {
  __typename?: 'ReleaseConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionUser = {
  __typename?: 'ReleaseConnectionUser'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseConnectionVocalist = {
  __typename?: 'ReleaseConnectionVocalist'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ReleaseConnection>
}

export type ReleaseGroupBy = {
  __typename?: 'ReleaseGroupBy'
  id?: Maybe<Array<Maybe<ReleaseConnectionId>>>
  created_at?: Maybe<Array<Maybe<ReleaseConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<ReleaseConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<ReleaseConnectionName>>>
  date?: Maybe<Array<Maybe<ReleaseConnectionDate>>>
  type?: Maybe<Array<Maybe<ReleaseConnectionType>>>
  licensing_usage?: Maybe<Array<Maybe<ReleaseConnectionLicensing_Usage>>>
  description?: Maybe<Array<Maybe<ReleaseConnectionDescription>>>
  artwork?: Maybe<Array<Maybe<ReleaseConnectionArtwork>>>
  produced_by?: Maybe<Array<Maybe<ReleaseConnectionProduced_By>>>
  vocalist?: Maybe<Array<Maybe<ReleaseConnectionVocalist>>>
  all_royalties?: Maybe<Array<Maybe<ReleaseConnectionAll_Royalties>>>
  term_contract?: Maybe<Array<Maybe<ReleaseConnectionTerm_Contract>>>
  status?: Maybe<Array<Maybe<ReleaseConnectionStatus>>>
  catalog?: Maybe<Array<Maybe<ReleaseConnectionCatalog>>>
  user?: Maybe<Array<Maybe<ReleaseConnectionUser>>>
  notes?: Maybe<Array<Maybe<ReleaseConnectionNotes>>>
}

export type ReleaseInput = {
  name: Scalars['String']
  date?: Maybe<Scalars['Date']>
  type?: Maybe<Enum_Release_Type>
  licensing_usage?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  artwork?: Maybe<Scalars['ID']>
  produced_by?: Maybe<Scalars['String']>
  vocalist?: Maybe<Scalars['String']>
  all_royalties?: Maybe<Scalars['Boolean']>
  term_contract?: Maybe<Scalars['Boolean']>
  status?: Maybe<Enum_Release_Status>
  tracks?: Maybe<Array<Maybe<Scalars['ID']>>>
  catalog?: Maybe<Scalars['String']>
  user?: Maybe<Scalars['ID']>
  notes?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type RoleInput = {
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Track = {
  __typename?: 'Track'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  mix_name?: Maybe<Scalars['String']>
  genre?: Maybe<Enum_Track_Genre>
  url?: Maybe<Scalars['String']>
  ISRC?: Maybe<Scalars['String']>
  EAN_UPC?: Maybe<Scalars['String']>
  release?: Maybe<Release>
  track_artist?: Maybe<Scalars['String']>
  remixer_name?: Maybe<Scalars['String']>
}

export type TrackAggregator = {
  __typename?: 'TrackAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type TrackConnection = {
  __typename?: 'TrackConnection'
  values?: Maybe<Array<Maybe<Track>>>
  groupBy?: Maybe<TrackGroupBy>
  aggregate?: Maybe<TrackAggregator>
}

export type TrackConnectionCreated_At = {
  __typename?: 'TrackConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionEan_Upc = {
  __typename?: 'TrackConnectionEAN_UPC'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionGenre = {
  __typename?: 'TrackConnectionGenre'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionIsrc = {
  __typename?: 'TrackConnectionISRC'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionId = {
  __typename?: 'TrackConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionMix_Name = {
  __typename?: 'TrackConnectionMix_name'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionName = {
  __typename?: 'TrackConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionRelease = {
  __typename?: 'TrackConnectionRelease'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionRemixer_Name = {
  __typename?: 'TrackConnectionRemixer_name'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionTrack_Artist = {
  __typename?: 'TrackConnectionTrack_artist'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionUpdated_At = {
  __typename?: 'TrackConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<TrackConnection>
}

export type TrackConnectionUrl = {
  __typename?: 'TrackConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TrackConnection>
}

export type TrackGroupBy = {
  __typename?: 'TrackGroupBy'
  id?: Maybe<Array<Maybe<TrackConnectionId>>>
  created_at?: Maybe<Array<Maybe<TrackConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<TrackConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<TrackConnectionName>>>
  mix_name?: Maybe<Array<Maybe<TrackConnectionMix_Name>>>
  genre?: Maybe<Array<Maybe<TrackConnectionGenre>>>
  url?: Maybe<Array<Maybe<TrackConnectionUrl>>>
  ISRC?: Maybe<Array<Maybe<TrackConnectionIsrc>>>
  EAN_UPC?: Maybe<Array<Maybe<TrackConnectionEan_Upc>>>
  release?: Maybe<Array<Maybe<TrackConnectionRelease>>>
  track_artist?: Maybe<Array<Maybe<TrackConnectionTrack_Artist>>>
  remixer_name?: Maybe<Array<Maybe<TrackConnectionRemixer_Name>>>
}

export type TrackInput = {
  name?: Maybe<Scalars['String']>
  mix_name?: Maybe<Scalars['String']>
  genre?: Maybe<Enum_Track_Genre>
  url?: Maybe<Scalars['String']>
  ISRC?: Maybe<Scalars['String']>
  EAN_UPC?: Maybe<Scalars['String']>
  release?: Maybe<Scalars['ID']>
  track_artist?: Maybe<Scalars['String']>
  remixer_name?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Morph>>>
}

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<UploadFileAggregatorSum>
  avg?: Maybe<UploadFileAggregatorAvg>
  min?: Maybe<UploadFileAggregatorMin>
  max?: Maybe<UploadFileAggregatorMax>
}

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection'
  values?: Maybe<Array<Maybe<UploadFile>>>
  groupBy?: Maybe<UploadFileGroupBy>
  aggregate?: Maybe<UploadFileAggregator>
}

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy'
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>
}

export type UserInput = {
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  artist_name?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['ID']>
  biography?: Maybe<Scalars['String']>
  social_links?: Maybe<ComponentSocialSocialLinkInput>
  releases?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Maybe<Scalars['String']>
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsMeRole>
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  id: Scalars['ID']
  type: Scalars['String']
  controller: Scalars['String']
  action: Scalars['String']
  enabled: Scalars['Boolean']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsRegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
}

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsRole>
  artist_name?: Maybe<Scalars['String']>
  avatar?: Maybe<UploadFile>
  biography?: Maybe<Scalars['String']>
  social_links?: Maybe<ComponentSocialSocialLinks>
  releases?: Maybe<Array<Maybe<Release>>>
}

export type UsersPermissionsUserReleasesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  aggregate?: Maybe<UsersPermissionsUserAggregator>
}

export type UsersPermissionsUserConnectionArtist_Name = {
  __typename?: 'UsersPermissionsUserConnectionArtist_name'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionAvatar = {
  __typename?: 'UsersPermissionsUserConnectionAvatar'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionBiography = {
  __typename?: 'UsersPermissionsUserConnectionBiography'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionSocial_Links = {
  __typename?: 'UsersPermissionsUserConnectionSocial_links'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  artist_name?: Maybe<Array<Maybe<UsersPermissionsUserConnectionArtist_Name>>>
  avatar?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAvatar>>>
  biography?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBiography>>>
  social_links?: Maybe<Array<Maybe<UsersPermissionsUserConnectionSocial_Links>>>
}

export type CreateReleaseInput = {
  data?: Maybe<ReleaseInput>
}

export type CreateReleasePayload = {
  __typename?: 'createReleasePayload'
  release?: Maybe<Release>
}

export type CreateRoleInput = {
  data?: Maybe<RoleInput>
}

export type CreateRolePayload = {
  __typename?: 'createRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type CreateTrackInput = {
  data?: Maybe<TrackInput>
}

export type CreateTrackPayload = {
  __typename?: 'createTrackPayload'
  track?: Maybe<Track>
}

export type CreateUserInput = {
  data?: Maybe<UserInput>
}

export type CreateUserPayload = {
  __typename?: 'createUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type DeleteFileInput = {
  where?: Maybe<InputId>
}

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload'
  file?: Maybe<UploadFile>
}

export type DeleteReleaseInput = {
  where?: Maybe<InputId>
}

export type DeleteReleasePayload = {
  __typename?: 'deleteReleasePayload'
  release?: Maybe<Release>
}

export type DeleteRoleInput = {
  where?: Maybe<InputId>
}

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type DeleteTrackInput = {
  where?: Maybe<InputId>
}

export type DeleteTrackPayload = {
  __typename?: 'deleteTrackPayload'
  track?: Maybe<Track>
}

export type DeleteUserInput = {
  where?: Maybe<InputId>
}

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type EditComponentSocialSocialLinkInput = {
  id?: Maybe<Scalars['ID']>
  instagram?: Maybe<Scalars['String']>
  soundcloud?: Maybe<Scalars['String']>
  spotify?: Maybe<Scalars['String']>
  beatport?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
}

export type EditFileInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash?: Maybe<Scalars['String']>
  ext?: Maybe<Scalars['String']>
  mime?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  url?: Maybe<Scalars['String']>
  previewUrl?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditReleaseInput = {
  name?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['Date']>
  type?: Maybe<Enum_Release_Type>
  licensing_usage?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  artwork?: Maybe<Scalars['ID']>
  produced_by?: Maybe<Scalars['String']>
  vocalist?: Maybe<Scalars['String']>
  all_royalties?: Maybe<Scalars['Boolean']>
  term_contract?: Maybe<Scalars['Boolean']>
  status?: Maybe<Enum_Release_Status>
  tracks?: Maybe<Array<Maybe<Scalars['ID']>>>
  catalog?: Maybe<Scalars['String']>
  user?: Maybe<Scalars['ID']>
  notes?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditTrackInput = {
  name?: Maybe<Scalars['String']>
  mix_name?: Maybe<Scalars['String']>
  genre?: Maybe<Enum_Track_Genre>
  url?: Maybe<Scalars['String']>
  ISRC?: Maybe<Scalars['String']>
  EAN_UPC?: Maybe<Scalars['String']>
  release?: Maybe<Scalars['ID']>
  track_artist?: Maybe<Scalars['String']>
  remixer_name?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditUserInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  artist_name?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['ID']>
  biography?: Maybe<Scalars['String']>
  social_links?: Maybe<EditComponentSocialSocialLinkInput>
  releases?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UpdateReleaseInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditReleaseInput>
}

export type UpdateReleasePayload = {
  __typename?: 'updateReleasePayload'
  release?: Maybe<Release>
}

export type UpdateRoleInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditRoleInput>
}

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateTrackInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditTrackInput>
}

export type UpdateTrackPayload = {
  __typename?: 'updateTrackPayload'
  track?: Maybe<Track>
}

export type UpdateUserInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditUserInput>
}

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput
}>

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser?: Maybe<
    { __typename?: 'createUserPayload' } & {
      user?: Maybe<
        { __typename?: 'UsersPermissionsUser' } & Pick<
          UsersPermissionsUser,
          'id' | 'username' | 'email'
        >
      >
    }
  >
}

export type GetMeQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type GetMeQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'UsersPermissionsUser' } & Pick<
      UsersPermissionsUser,
      'id' | 'email' | 'artist_name'
    > & {
        avatar?: Maybe<
          { __typename?: 'UploadFile' } & Pick<UploadFile, 'id' | 'url'>
        >
        releases?: Maybe<
          Array<Maybe<{ __typename?: 'Release' } & Pick<Release, 'id'>>>
        >
      }
  >
}

export type AllReleasesQueryVariables = Exact<{ [key: string]: never }>

export type AllReleasesQuery = { __typename?: 'Query' } & {
  releases?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Release' } & Pick<
          Release,
          | 'id'
          | 'name'
          | 'date'
          | 'type'
          | 'status'
          | 'catalog'
          | 'created_at'
          | 'description'
          | 'licensing_usage'
        > & {
            user?: Maybe<
              { __typename?: 'UsersPermissionsUser' } & Pick<
                UsersPermissionsUser,
                'id' | 'email'
              >
            >
            artwork?: Maybe<
              { __typename?: 'UploadFile' } & Pick<UploadFile, 'id' | 'url'>
            >
          }
      >
    >
  >
}

export const CreateUserDocument = `
    mutation createUser($input: createUserInput!) {
  createUser(input: $input) {
    user {
      id
      username
      email
    }
  }
}
    `
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
export const GetMeDocument = `
    query getMe($id: ID!) {
  user(id: $id) {
    id
    email
    artist_name
    avatar {
      id
      url
    }
    releases {
      id
    }
  }
}
    `
export const useGetMeQuery = <TData = GetMeQuery, TError = unknown>(
  variables: GetMeQueryVariables,
  options?: UseQueryOptions<GetMeQuery, TError, TData>
) =>
  useQuery<GetMeQuery, TError, TData>(
    ['getMe', variables],
    myFetcher<GetMeQuery, GetMeQueryVariables>(GetMeDocument, variables),
    options
  )
export const AllReleasesDocument = `
    query AllReleases {
  releases {
    id
    name
    date
    type
    status
    catalog
    created_at
    description
    licensing_usage
    user {
      id
      email
    }
    artwork {
      id
      url
    }
  }
}
    `
export const useAllReleasesQuery = <TData = AllReleasesQuery, TError = unknown>(
  variables?: AllReleasesQueryVariables,
  options?: UseQueryOptions<AllReleasesQuery, TError, TData>
) =>
  useQuery<AllReleasesQuery, TError, TData>(
    ['AllReleases', variables],
    myFetcher<AllReleasesQuery, AllReleasesQueryVariables>(
      AllReleasesDocument,
      variables
    ),
    options
  )
