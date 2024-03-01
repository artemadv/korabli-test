import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  HexColorField: { input: any; output: any; }
  JSONString: { input: any; output: any; }
  L10nField: { input: any; output: any; }
  MediaUrlField: { input: any; output: any; }
};

export type AccountCompletionRewardsInterface = {
  accountCompletionRewards?: Maybe<Array<Maybe<Reward>>>;
};


export type AccountCompletionRewardsInterfaceAccountCompletionRewardsArgs = {
  platform: Scalars['String']['input'];
};

export type Achievements = {
  __typename?: 'Achievements';
  battleRestriction?: Maybe<Scalars['L10nField']['output']>;
  battleTypes?: Maybe<Array<Maybe<BattleType>>>;
  description?: Maybe<Scalars['L10nField']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  group?: Maybe<Scalars['Int']['output']>;
  grouping?: Maybe<GroupingAchievements>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  icons?: Maybe<IconsAchievements>;
  id?: Maybe<Scalars['ID']['output']>;
  isBattle?: Maybe<Scalars['Boolean']['output']>;
  isProgress?: Maybe<Scalars['Boolean']['output']>;
  isRare?: Maybe<Scalars['Boolean']['output']>;
  maxProgress?: Maybe<Scalars['Int']['output']>;
  maxShipLevel?: Maybe<Scalars['Int']['output']>;
  minShipLevel?: Maybe<Scalars['Int']['output']>;
  multiple?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  onePerBattle?: Maybe<Scalars['Boolean']['output']>;
  receivingRestriction?: Maybe<Scalars['L10nField']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  typeTitle?: Maybe<Scalars['L10nField']['output']>;
};

export type AchievementsGroup = {
  __typename?: 'AchievementsGroup';
  id?: Maybe<Scalars['ID']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  subgroups?: Maybe<Array<Maybe<AchievementsSubGroup>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type AchievementsGroupsInterface = {
  achievementsGroups?: Maybe<Array<Maybe<AchievementsGroup>>>;
};


export type AchievementsGroupsInterfaceAchievementsGroupsArgs = {
  achievementsGroupId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementsInterface = {
  achievements?: Maybe<Array<Maybe<Achievements>>>;
};


export type AchievementsInterfaceAchievementsArgs = {
  achievementId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementsSubGroup = {
  __typename?: 'AchievementsSubGroup';
  id?: Maybe<Scalars['ID']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type ArenaBattle = {
  __typename?: 'ArenaBattle';
  arenaId?: Maybe<Scalars['String']['output']>;
  battleTypeId?: Maybe<Scalars['String']['output']>;
  gameModeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  scenarioName?: Maybe<Scalars['String']['output']>;
};

export type ArenaBattlesInterface = {
  arenaBattles?: Maybe<Array<Maybe<ArenaBattle>>>;
};

export type BattleMode = {
  __typename?: 'BattleMode';
  description?: Maybe<Scalars['L10nField']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type BattleModesInterface = {
  battleModes?: Maybe<Array<Maybe<BattleMode>>>;
};


export type BattleModesInterfaceBattleModesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type BattleScenario = {
  __typename?: 'BattleScenario';
  scenarioName?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type BattleScenariosInterface = {
  battleScenarios?: Maybe<Array<Maybe<BattleScenario>>>;
};


export type BattleScenariosInterfaceBattleScenariosArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type BattleType = {
  __typename?: 'BattleType';
  description?: Maybe<Scalars['L10nField']['output']>;
  dossierName?: Maybe<Scalars['String']['output']>;
  icons?: Maybe<IconBattleType>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type BattleTypesInterface = {
  battleTypes?: Maybe<Array<Maybe<BattleType>>>;
};


export type BattleTypesInterfaceBattleTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  description?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<CampaignIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  isTemporary?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rewards?: Maybe<Scalars['JSONString']['output']>;
  tasks?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type CampaignIcons = {
  __typename?: 'CampaignIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type CampaignInterface = {
  campaigns?: Maybe<Array<Maybe<Campaign>>>;
};

export type ClanTag = {
  __typename?: 'ClanTag';
  fontColor?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type CollectibleAlbum = {
  __typename?: 'CollectibleAlbum';
  cardCost?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<CollectibleAlbumIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
  titleQuotes?: Maybe<Scalars['L10nField']['output']>;
};

export type CollectibleAlbumIcons = {
  __typename?: 'CollectibleAlbumIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type CollectibleAlbumsInterface = {
  collectibleAlbum?: Maybe<Array<Maybe<CollectibleAlbum>>>;
};


export type CollectibleAlbumsInterfaceCollectibleAlbumArgs = {
  albumId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CollectibleCard = {
  __typename?: 'CollectibleCard';
  album?: Maybe<CollectibleAlbum>;
  description?: Maybe<Scalars['L10nField']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type CollectibleCardsInterface = {
  collectibleCards?: Maybe<Array<Maybe<CollectibleCard>>>;
};

export type ComponentIcons = {
  __typename?: 'ComponentIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  localLarge?: Maybe<Scalars['String']['output']>;
  localMedium?: Maybe<Scalars['String']['output']>;
  localSmall?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['MediaUrlField']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Crew = {
  __typename?: 'Crew';
  baseTrainingLevel?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  hasRank?: Maybe<Scalars['Boolean']['output']>;
  hasSampleVo?: Maybe<Scalars['Boolean']['output']>;
  icons?: Maybe<Array<Maybe<CrewIcon>>>;
  id?: Maybe<Scalars['ID']['output']>;
  isPerson?: Maybe<Scalars['Boolean']['output']>;
  isRetrainable?: Maybe<Scalars['Boolean']['output']>;
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nation?: Maybe<Nation>;
  nationsToSeat?: Maybe<Array<Maybe<Nation>>>;
  peculiarity?: Maybe<Peculiarity>;
  personalizationTypes?: Maybe<Array<Maybe<CrewPersonalizationType>>>;
  skills?: Maybe<Array<Maybe<CrewSkill>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  talents?: Maybe<Array<Maybe<CrewTalent>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unlocks?: Maybe<Array<Maybe<Unlock>>>;
};

export type CrewIcon = {
  __typename?: 'CrewIcon';
  default?: Maybe<Scalars['String']['output']>;
  maxLevel?: Maybe<Scalars['Int']['output']>;
  minLevel?: Maybe<Scalars['Int']['output']>;
};

export type CrewPersonalizationType = {
  __typename?: 'CrewPersonalizationType';
  description?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<PersonalizationTypesIcons>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type CrewSkill = {
  __typename?: 'CrewSkill';
  customization?: Maybe<Array<Maybe<CustomizationField>>>;
  description?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<SkillIcons>;
  perks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tier?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
  typeId?: Maybe<Scalars['Int']['output']>;
};

export type CrewTalent = {
  __typename?: 'CrewTalent';
  description?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<TalentsIcons>;
  maxTriggerNum?: Maybe<Scalars['Int']['output']>;
  perks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type CrewsInterfaces = {
  crews?: Maybe<Array<Maybe<Crew>>>;
};


export type CrewsInterfacesCrewsArgs = {
  crewId?: InputMaybe<Scalars['String']['input']>;
  crewIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  isPerson?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Currency = {
  __typename?: 'Currency';
  description?: Maybe<Scalars['String']['output']>;
  icons?: Maybe<CurrencyIcons>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
  tooltipDescription?: Maybe<Scalars['L10nField']['output']>;
  tooltipGetDescription?: Maybe<Scalars['L10nField']['output']>;
  tooltipStatusInfo?: Maybe<Scalars['L10nField']['output']>;
};

export type CurrencyIcons = {
  __typename?: 'CurrencyIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  extra?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  localDefault?: Maybe<Scalars['String']['output']>;
  localExtra?: Maybe<Scalars['String']['output']>;
  localSmall?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type CurrencyInterface = {
  currencies?: Maybe<Array<Maybe<Currency>>>;
};


export type CurrencyInterfaceCurrenciesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CustomizationField = {
  __typename?: 'CustomizationField';
  description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DogTagComponent = {
  __typename?: 'DogTagComponent';
  clanTag?: Maybe<ClanTag>;
  color?: Maybe<Scalars['String']['output']>;
  condition?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<ComponentIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  isColorizable?: Maybe<Scalars['Boolean']['output']>;
  isPatch?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quest?: Maybe<Scalars['L10nField']['output']>;
  showClanTag?: Maybe<Scalars['Boolean']['output']>;
  symbolOffsetY?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  textureData?: Maybe<Array<Maybe<TextureDataItem>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DogTagsInterface = {
  dogTagComponents?: Maybe<Array<Maybe<DogTagComponent>>>;
};


export type DogTagsInterfaceDogTagComponentsArgs = {
  componentId?: InputMaybe<Scalars['String']['input']>;
  componentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Doll = {
  __typename?: 'Doll';
  clanTag?: Maybe<DollClanTag>;
  condition?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<DollIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quest?: Maybe<Scalars['L10nField']['output']>;
  showClanTag?: Maybe<Scalars['Boolean']['output']>;
  symbolOffsetY?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DollClanTag = {
  __typename?: 'DollClanTag';
  fontColor?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type DollIcons = {
  __typename?: 'DollIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  localLarge?: Maybe<Scalars['String']['output']>;
  localSmall?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['MediaUrlField']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type DollsInterface = {
  dolls?: Maybe<Array<Maybe<Doll>>>;
};


export type DollsInterfaceDollsArgs = {
  dollId?: InputMaybe<Scalars['String']['input']>;
  dollIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Ensign = {
  __typename?: 'Ensign';
  categoryType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<EnsignIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prices?: Maybe<Prices>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  titleShort?: Maybe<Scalars['L10nField']['output']>;
  ttc?: Maybe<Array<Maybe<Ttc>>>;
};

export type EnsignIcons = {
  __typename?: 'EnsignIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  localDefault?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['MediaUrlField']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type EnsignsInterfaces = {
  ensigns?: Maybe<Array<Maybe<Ensign>>>;
};


export type EnsignsInterfacesEnsignsArgs = {
  ensignsId?: InputMaybe<Scalars['String']['input']>;
  ensignsIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureCategory = {
  __typename?: 'FeatureCategory';
  icons?: Maybe<IconsFeatureCategory>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type FeaturesInterface = {
  features?: Maybe<Array<Maybe<VehiclesFeatures>>>;
};


export type FeaturesInterfaceFeaturesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GameVersionInterface = {
  version?: Maybe<Scalars['String']['output']>;
};

export type GlossaryQuery = AccountCompletionRewardsInterface & AchievementsGroupsInterface & AchievementsInterface & ArenaBattlesInterface & BattleModesInterface & BattleScenariosInterface & BattleTypesInterface & CampaignInterface & CollectibleAlbumsInterface & CollectibleCardsInterface & CrewsInterfaces & CurrencyInterface & DogTagsInterface & DollsInterface & EnsignsInterfaces & FeaturesInterface & GameVersionInterface & ItemInterface & ItemTypesInterface & LootBoxInterface & NationsInterface & PeculiarityInterface & PermoflagesInterface & UnlockInterface & VehicleTypesInterface & VehiclesInterface & {
  __typename?: 'GlossaryQuery';
  accountCompletionRewards?: Maybe<Array<Maybe<Reward>>>;
  achievements?: Maybe<Array<Maybe<Achievements>>>;
  achievementsGroups?: Maybe<Array<Maybe<AchievementsGroup>>>;
  arenaBattles?: Maybe<Array<Maybe<ArenaBattle>>>;
  battleModes?: Maybe<Array<Maybe<BattleMode>>>;
  battleScenarios?: Maybe<Array<Maybe<BattleScenario>>>;
  battleTypes?: Maybe<Array<Maybe<BattleType>>>;
  campaigns?: Maybe<Array<Maybe<Campaign>>>;
  collectibleAlbum?: Maybe<Array<Maybe<CollectibleAlbum>>>;
  collectibleCards?: Maybe<Array<Maybe<CollectibleCard>>>;
  crews?: Maybe<Array<Maybe<Crew>>>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  dogTagComponents?: Maybe<Array<Maybe<DogTagComponent>>>;
  dolls?: Maybe<Array<Maybe<Doll>>>;
  ensigns?: Maybe<Array<Maybe<Ensign>>>;
  features?: Maybe<Array<Maybe<VehiclesFeatures>>>;
  itemTypes?: Maybe<Array<Maybe<ItemType>>>;
  items?: Maybe<Array<Maybe<Item>>>;
  lootbox?: Maybe<Array<Maybe<LootBox>>>;
  nations?: Maybe<Array<Maybe<Nation>>>;
  peculiarities?: Maybe<Array<Maybe<Peculiarity>>>;
  permoflages?: Maybe<Array<Maybe<Permoflages>>>;
  unlocks?: Maybe<Array<Maybe<Unlock>>>;
  vehicleTypes?: Maybe<Array<Maybe<VehicleType>>>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
  version?: Maybe<Scalars['String']['output']>;
};


export type GlossaryQueryAccountCompletionRewardsArgs = {
  platform: Scalars['String']['input'];
};


export type GlossaryQueryAchievementsArgs = {
  achievementId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryAchievementsGroupsArgs = {
  achievementsGroupId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryBattleModesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryBattleScenariosArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryBattleTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryCollectibleAlbumArgs = {
  albumId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryCrewsArgs = {
  crewId?: InputMaybe<Scalars['String']['input']>;
  crewIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  isPerson?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryCurrenciesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryDogTagComponentsArgs = {
  componentId?: InputMaybe<Scalars['String']['input']>;
  componentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryDollsArgs = {
  dollId?: InputMaybe<Scalars['String']['input']>;
  dollIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryEnsignsArgs = {
  ensignsId?: InputMaybe<Scalars['String']['input']>;
  ensignsIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryFeaturesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryItemTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryItemsArgs = {
  itemGroup?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  itemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryLootboxArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
  lootboxId?: InputMaybe<Scalars['String']['input']>;
  lootboxIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlossaryQueryNationsArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryPeculiaritiesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryPermoflagesArgs = {
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  permoflageId?: InputMaybe<Scalars['String']['input']>;
  permoflageIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlossaryQueryUnlocksArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
  unlockId?: InputMaybe<Scalars['Int']['input']>;
};


export type GlossaryQueryVehicleTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type GlossaryQueryVehiclesArgs = {
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['String']['input']>;
  vehicleIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GroupingAchievements = {
  __typename?: 'GroupingAchievements';
  group?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  sortOrderInGroup?: Maybe<Scalars['Int']['output']>;
  subgroup?: Maybe<Scalars['String']['output']>;
};

export type IconBattleType = {
  __typename?: 'IconBattleType';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type IconsAchievements = {
  __typename?: 'IconsAchievements';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  inactive?: Maybe<Scalars['MediaUrlField']['output']>;
  normal?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type IconsFeatureCategory = {
  __typename?: 'IconsFeatureCategory';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  localDefault?: Maybe<Scalars['String']['output']>;
};

export type IconsVehicle = {
  __typename?: 'IconsVehicle';
  contour?: Maybe<Scalars['MediaUrlField']['output']>;
  contourAlive?: Maybe<Scalars['MediaUrlField']['output']>;
  contourDead?: Maybe<Scalars['MediaUrlField']['output']>;
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  localSmall?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['MediaUrlField']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type IconsVehicleClass = {
  __typename?: 'IconsVehicleClass';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  elite?: Maybe<Scalars['MediaUrlField']['output']>;
  normal?: Maybe<Scalars['MediaUrlField']['output']>;
  premium?: Maybe<Scalars['MediaUrlField']['output']>;
  special?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Item = {
  __typename?: 'Item';
  description?: Maybe<Scalars['L10nField']['output']>;
  group?: Maybe<ItemType>;
  groupName?: Maybe<Scalars['String']['output']>;
  icons?: Maybe<ItemIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prices?: Maybe<Prices>;
  restrictions?: Maybe<ItemRestrictions>;
  slot?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  titleShort?: Maybe<Scalars['L10nField']['output']>;
  ttc?: Maybe<Array<Maybe<Ttc>>>;
  type?: Maybe<ItemType>;
  typeName?: Maybe<Scalars['String']['output']>;
};

export type ItemIcons = {
  __typename?: 'ItemIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  extra?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type ItemInterface = {
  items?: Maybe<Array<Maybe<Item>>>;
};


export type ItemInterfaceItemsArgs = {
  itemGroup?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  itemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type ItemRestrictions = {
  __typename?: 'ItemRestrictions';
  levels?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  subtype?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemType = {
  __typename?: 'ItemType';
  icons?: Maybe<ItemTypeIcons>;
  name?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type ItemTypeIcons = {
  __typename?: 'ItemTypeIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type ItemTypesInterface = {
  itemTypes?: Maybe<Array<Maybe<ItemType>>>;
};


export type ItemTypesInterfaceItemTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type LootBox = {
  __typename?: 'LootBox';
  icons?: Maybe<LootboxIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  isPremium?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rewards?: Maybe<Array<Maybe<Rewards>>>;
  shortTitle?: Maybe<Scalars['L10nField']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type LootBoxInterface = {
  lootbox?: Maybe<Array<Maybe<LootBox>>>;
};


export type LootBoxInterfaceLootboxArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
  lootboxId?: InputMaybe<Scalars['String']['input']>;
  lootboxIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LootboxIcons = {
  __typename?: 'LootboxIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Nation = {
  __typename?: 'Nation';
  color?: Maybe<Scalars['HexColorField']['output']>;
  icons?: Maybe<NationIcons>;
  name?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type NationIcons = {
  __typename?: 'NationIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  medium?: Maybe<Scalars['MediaUrlField']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
  tiny?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type NationsInterface = {
  nations?: Maybe<Array<Maybe<Nation>>>;
};


export type NationsInterfaceNationsArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Peculiarity = {
  __typename?: 'Peculiarity';
  category?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type PeculiarityInterface = {
  peculiarities?: Maybe<Array<Maybe<Peculiarity>>>;
};


export type PeculiarityInterfacePeculiaritiesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type PermoflageRestrictions = {
  __typename?: 'PermoflageRestrictions';
  forbiddenShips?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  levels?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  nations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  specificShips?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PermoflageVehicles = {
  __typename?: 'PermoflageVehicles';
  isNative?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
  vehicle?: Maybe<Vehicle>;
};

/** Glossary: https://glossary.lstprod.net/glossary/v1/wows/current/wows_permoflages?lang=en */
export type Permoflages = {
  __typename?: 'Permoflages';
  description?: Maybe<Scalars['L10nField']['output']>;
  icons?: Maybe<PermoglagesIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prices?: Maybe<Prices>;
  relatedVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  restrictions?: Maybe<PermoflageRestrictions>;
  subType?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  titleShort?: Maybe<Scalars['L10nField']['output']>;
  type?: Maybe<ItemType>;
  typeName?: Maybe<Scalars['String']['output']>;
  vehicles?: Maybe<Array<Maybe<PermoflageVehicles>>>;
};

export type PermoflagesInterface = {
  permoflages?: Maybe<Array<Maybe<Permoflages>>>;
};


export type PermoflagesInterfacePermoflagesArgs = {
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  permoflageId?: InputMaybe<Scalars['String']['input']>;
  permoflageIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PermoglagesIcons = {
  __typename?: 'PermoglagesIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  large?: Maybe<Scalars['MediaUrlField']['output']>;
  localDefault?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['MediaUrlField']['output']>;
  small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type PersonalizationTypesIcons = {
  __typename?: 'PersonalizationTypesIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Prices = {
  __typename?: 'Prices';
  credit?: Maybe<Scalars['Int']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  xp?: Maybe<Scalars['Int']['output']>;
};

export type Reward = {
  __typename?: 'Reward';
  amount?: Maybe<Scalars['Int']['output']>;
  crewLevel?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  onlySilver?: Maybe<Scalars['Boolean']['output']>;
  shipId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Rewards = {
  __typename?: 'Rewards';
  category?: Maybe<Scalars['String']['output']>;
  reward?: Maybe<Reward>;
  slotId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SkillIcons = {
  __typename?: 'SkillIcons';
  active?: Maybe<Scalars['MediaUrlField']['output']>;
  default?: Maybe<Scalars['MediaUrlField']['output']>;
  inactive?: Maybe<Scalars['MediaUrlField']['output']>;
  penalty?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Ttc = {
  __typename?: 'TTC';
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TalentsIcons = {
  __typename?: 'TalentsIcons';
  default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type TextureDataItem = {
  __typename?: 'TextureDataItem';
  background?: Maybe<ComponentIcons>;
  border?: Maybe<ComponentIcons>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Unlock = {
  __typename?: 'Unlock';
  description?: Maybe<Scalars['L10nField']['output']>;
  icon?: Maybe<Scalars['MediaUrlField']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

export type UnlockInterface = {
  unlocks?: Maybe<Array<Maybe<Unlock>>>;
};


export type UnlockInterfaceUnlocksArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
  unlockId?: InputMaybe<Scalars['Int']['input']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  consumables?: Maybe<Array<Maybe<VehicleConsumable>>>;
  description?: Maybe<Scalars['L10nField']['output']>;
  hasGoldPrice?: Maybe<Scalars['Boolean']['output']>;
  icons?: Maybe<IconsVehicle>;
  id?: Maybe<Scalars['ID']['output']>;
  isClan?: Maybe<Scalars['Boolean']['output']>;
  isPremium?: Maybe<Scalars['Boolean']['output']>;
  isSpecial?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  modernizations?: Maybe<Array<Maybe<VehicleModernization>>>;
  name?: Maybe<Scalars['String']['output']>;
  nation?: Maybe<Nation>;
  nationName?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  titleShort?: Maybe<Scalars['L10nField']['output']>;
  ttc?: Maybe<Array<Maybe<VehicleTtc>>>;
  type?: Maybe<VehicleType>;
  typeName?: Maybe<Scalars['String']['output']>;
};

export type VehicleConsumable = {
  __typename?: 'VehicleConsumable';
  consumableSlot?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['L10nField']['output']>;
  group?: Maybe<ItemType>;
  groupName?: Maybe<Scalars['String']['output']>;
  icons?: Maybe<ItemIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prices?: Maybe<Prices>;
  restrictions?: Maybe<ItemRestrictions>;
  slot?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  titleShort?: Maybe<Scalars['L10nField']['output']>;
  ttc?: Maybe<Array<Maybe<Ttc>>>;
  type?: Maybe<ItemType>;
  typeName?: Maybe<Scalars['String']['output']>;
};

export type VehicleFeaturesCategories = {
  __typename?: 'VehicleFeaturesCategories';
  category?: Maybe<FeatureCategory>;
  features?: Maybe<Array<Maybe<VehicleMainFeatures>>>;
};

export type VehicleMainFeatures = {
  __typename?: 'VehicleMainFeatures';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['L10nField']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
};

export type VehicleModernization = {
  __typename?: 'VehicleModernization';
  description?: Maybe<Scalars['L10nField']['output']>;
  group?: Maybe<ItemType>;
  groupName?: Maybe<Scalars['String']['output']>;
  icons?: Maybe<ItemIcons>;
  id?: Maybe<Scalars['ID']['output']>;
  modernizationSlot?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prices?: Maybe<Prices>;
  restrictions?: Maybe<ItemRestrictions>;
  slot?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['L10nField']['output']>;
  titleShort?: Maybe<Scalars['L10nField']['output']>;
  ttc?: Maybe<Array<Maybe<Ttc>>>;
  type?: Maybe<ItemType>;
  typeName?: Maybe<Scalars['String']['output']>;
};

export type VehicleTtc = {
  __typename?: 'VehicleTTC';
  description?: Maybe<Scalars['L10nField']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
  unit?: Maybe<Scalars['L10nField']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type VehicleType = {
  __typename?: 'VehicleType';
  icons?: Maybe<IconsVehicleClass>;
  name?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['L10nField']['output']>;
  titleShort?: Maybe<Scalars['L10nField']['output']>;
};

export type VehicleTypesInterface = {
  vehicleTypes?: Maybe<Array<Maybe<VehicleType>>>;
};


export type VehicleTypesInterfaceVehicleTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type VehiclesFeatures = {
  __typename?: 'VehiclesFeatures';
  categories?: Maybe<Array<Maybe<VehicleFeaturesCategories>>>;
  id?: Maybe<Scalars['ID']['output']>;
  mainFeatures?: Maybe<Array<Maybe<VehicleMainFeatures>>>;
};

export type VehiclesInterface = {
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};


export type VehiclesInterfaceVehiclesArgs = {
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['String']['input']>;
  vehicleIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetVehiclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVehiclesQuery = { __typename?: 'GlossaryQuery', vehicles?: Array<{ __typename?: 'Vehicle', title?: any | null, description?: any | null, level?: number | null, icons?: { __typename?: 'IconsVehicle', large?: any | null, medium?: any | null } | null, type?: { __typename?: 'VehicleType', name?: string | null, title?: any | null, icons?: { __typename?: 'IconsVehicleClass', default?: any | null } | null } | null, nation?: { __typename?: 'Nation', name?: string | null, title?: any | null, color?: any | null, icons?: { __typename?: 'NationIcons', small?: any | null, medium?: any | null, large?: any | null } | null } | null } | null> | null };


export const GetVehiclesDocument = gql`
    query GetVehicles {
  vehicles {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}
    `;

/**
 * __useGetVehiclesQuery__
 *
 * To run a query within a React component, call `useGetVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVehiclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVehiclesQuery(baseOptions?: Apollo.QueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
      }
export function useGetVehiclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
        }
export function useGetVehiclesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
        }
export type GetVehiclesQueryHookResult = ReturnType<typeof useGetVehiclesQuery>;
export type GetVehiclesLazyQueryHookResult = ReturnType<typeof useGetVehiclesLazyQuery>;
export type GetVehiclesSuspenseQueryHookResult = ReturnType<typeof useGetVehiclesSuspenseQuery>;
export type GetVehiclesQueryResult = Apollo.QueryResult<GetVehiclesQuery, GetVehiclesQueryVariables>;