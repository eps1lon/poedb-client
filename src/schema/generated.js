import { schema as normalizr } from 'normalizr';
export const schema = {
  achievement: new normalizr.Entity(
    'achievements',
    {},
    {
      idAttribute: 'row',
    },
  ),
  achievementItem: new normalizr.Entity(
    'achievement_items',
    {},
    {
      idAttribute: 'row',
    },
  ),
  achievementSet: new normalizr.Entity(
    'achievement_sets',
    {},
    {
      idAttribute: 'row',
    },
  ),
  achievementSetReward: new normalizr.Entity(
    'achievement_set_rewards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  achievementSetsDisplay: new normalizr.Entity(
    'achievement_sets_displays',
    {},
    {
      idAttribute: 'row',
    },
  ),
  activeSkill: new normalizr.Entity(
    'active_skills',
    {},
    {
      idAttribute: 'row',
    },
  ),
  activeSkillTargetType: new normalizr.Entity(
    'active_skill_target_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  activeSkillType: new normalizr.Entity(
    'active_skill_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  armourClass: new normalizr.Entity(
    'armour_classes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  armourSurfaceType: new normalizr.Entity(
    'armour_surface_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  armourType: new normalizr.Entity(
    'armour_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  ascendancy: new normalizr.Entity(
    'ascendancies',
    {},
    {
      idAttribute: 'row',
    },
  ),
  atlasNode: new normalizr.Entity(
    'atlas_nodes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  atlasQuestItem: new normalizr.Entity(
    'atlas_quest_items',
    {},
    {
      idAttribute: 'row',
    },
  ),
  attribute: new normalizr.Entity(
    'attributes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  backendError: new normalizr.Entity(
    'backend_errors',
    {},
    {
      idAttribute: 'row',
    },
  ),
  baseItemType: new normalizr.Entity(
    'base_item_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  beyondDemon: new normalizr.Entity(
    'beyond_demons',
    {},
    {
      idAttribute: 'row',
    },
  ),
  bindableVirtualKey: new normalizr.Entity(
    'bindable_virtual_keys',
    {},
    {
      idAttribute: 'row',
    },
  ),
  bloodType: new normalizr.Entity(
    'blood_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  bloodline: new normalizr.Entity(
    'bloodlines',
    {},
    {
      idAttribute: 'row',
    },
  ),
  buffCategory: new normalizr.Entity(
    'buff_categories',
    {},
    {
      idAttribute: 'row',
    },
  ),
  buffDefinition: new normalizr.Entity(
    'buff_definitions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  buffGroup: new normalizr.Entity(
    'buff_groups',
    {},
    {
      idAttribute: 'row',
    },
  ),
  buffMergeMode: new normalizr.Entity(
    'buff_merge_modes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  buffVisual: new normalizr.Entity(
    'buff_visuals',
    {},
    {
      idAttribute: 'row',
    },
  ),
  buffVisualOrbType: new normalizr.Entity(
    'buff_visual_orb_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  character: new normalizr.Entity(
    'characters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterAudioEvent: new normalizr.Entity(
    'character_audio_events',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterPanelDescriptionMode: new normalizr.Entity(
    'character_panel_description_modes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterPanelStat: new normalizr.Entity(
    'character_panel_stats',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterPanelStatContext: new normalizr.Entity(
    'character_panel_stat_contexts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterPanelTab: new normalizr.Entity(
    'character_panel_tabs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterStartItem: new normalizr.Entity(
    'character_start_items',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterStartQuestState: new normalizr.Entity(
    'character_start_quest_states',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterStartState: new normalizr.Entity(
    'character_start_states',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterStartStateSet: new normalizr.Entity(
    'character_start_state_sets',
    {},
    {
      idAttribute: 'row',
    },
  ),
  characterTextAudio: new normalizr.Entity(
    'character_text_audios',
    {},
    {
      idAttribute: 'row',
    },
  ),
  chest: new normalizr.Entity(
    'chests',
    {},
    {
      idAttribute: 'row',
    },
  ),
  chestCluster: new normalizr.Entity(
    'chest_clusters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  chestEffect: new normalizr.Entity(
    'chest_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  clientString: new normalizr.Entity(
    'client_strings',
    {},
    {
      idAttribute: 'row',
    },
  ),
  cloneShotVariation: new normalizr.Entity(
    'clone_shot_variations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  command: new normalizr.Entity(
    'commands',
    {},
    {
      idAttribute: 'row',
    },
  ),
  componentArmour: new normalizr.Entity(
    'component_armours',
    {},
    {
      idAttribute: 'row',
    },
  ),
  componentAttributeRequirement: new normalizr.Entity(
    'component_attribute_requirements',
    {},
    {
      idAttribute: 'row',
    },
  ),
  componentCharge: new normalizr.Entity(
    'component_charges',
    {},
    {
      idAttribute: 'row',
    },
  ),
  cooldownBypassType: new normalizr.Entity(
    'cooldown_bypass_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  cooldownGroup: new normalizr.Entity(
    'cooldown_groups',
    {},
    {
      idAttribute: 'row',
    },
  ),
  craftingBenchCustomAction: new normalizr.Entity(
    'crafting_bench_custom_actions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  craftingBenchOption: new normalizr.Entity(
    'crafting_bench_options',
    {},
    {
      idAttribute: 'row',
    },
  ),
  currencyItem: new normalizr.Entity(
    'currency_items',
    {},
    {
      idAttribute: 'row',
    },
  ),
  currencyStashTabLayout: new normalizr.Entity(
    'currency_stash_tab_layouts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  currencyUseType: new normalizr.Entity(
    'currency_use_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dailyMission: new normalizr.Entity(
    'daily_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dailyOverride: new normalizr.Entity(
    'daily_overrides',
    {},
    {
      idAttribute: 'row',
    },
  ),
  damageParticleEffect: new normalizr.Entity(
    'damage_particle_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dance: new normalizr.Entity(
    'dances',
    {},
    {
      idAttribute: 'row',
    },
  ),
  daressoPitFight: new normalizr.Entity(
    'daresso_pit_fights',
    {},
    {
      idAttribute: 'row',
    },
  ),
  default: new normalizr.Entity(
    'defaults',
    {},
    {
      idAttribute: 'row',
    },
  ),
  defaultMonsterStat: new normalizr.Entity(
    'default_monster_stats',
    {},
    {
      idAttribute: 'row',
    },
  ),
  descentExile: new normalizr.Entity(
    'descent_exiles',
    {},
    {
      idAttribute: 'row',
    },
  ),
  descentRewardChest: new normalizr.Entity(
    'descent_reward_chests',
    {},
    {
      idAttribute: 'row',
    },
  ),
  descentStarterChest: new normalizr.Entity(
    'descent_starter_chests',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dexIntMission: new normalizr.Entity(
    'dex_int_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dexIntMissionGuard: new normalizr.Entity(
    'dex_int_mission_guards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dexIntMissionGuardMod: new normalizr.Entity(
    'dex_int_mission_guard_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dexIntMissionTarget: new normalizr.Entity(
    'dex_int_mission_targets',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dexMission: new normalizr.Entity(
    'dex_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dexMissionMod: new normalizr.Entity(
    'dex_mission_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dexMissionMonster: new normalizr.Entity(
    'dex_mission_monsters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dexMissionTracking: new normalizr.Entity(
    'dex_mission_trackings',
    {},
    {
      idAttribute: 'row',
    },
  ),
  difficulty: new normalizr.Entity(
    'difficulties',
    {},
    {
      idAttribute: 'row',
    },
  ),
  displayMinionMonsterType: new normalizr.Entity(
    'display_minion_monster_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  divinationCardArt: new normalizr.Entity(
    'divination_card_arts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  divinationCardStashTabLayout: new normalizr.Entity(
    'divination_card_stash_tab_layouts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  dropPool: new normalizr.Entity(
    'drop_pools',
    {},
    {
      idAttribute: 'row',
    },
  ),
  eclipseMod: new normalizr.Entity(
    'eclipse_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  effectiveness: new normalizr.Entity(
    'effectivenesses',
    {},
    {
      idAttribute: 'row',
    },
  ),
  effectivenessCostConstant: new normalizr.Entity(
    'effectiveness_cost_constants',
    {},
    {
      idAttribute: 'row',
    },
  ),
  endlessLedgeChest: new normalizr.Entity(
    'endless_ledge_chests',
    {},
    {
      idAttribute: 'row',
    },
  ),
  environment: new normalizr.Entity(
    'environments',
    {},
    {
      idAttribute: 'row',
    },
  ),
  essence: new normalizr.Entity(
    'essences',
    {},
    {
      idAttribute: 'row',
    },
  ),
  essenceStashTabLayout: new normalizr.Entity(
    'essence_stash_tab_layouts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  essenceType: new normalizr.Entity(
    'essence_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  eventSeason: new normalizr.Entity(
    'event_seasons',
    {},
    {
      idAttribute: 'row',
    },
  ),
  eventSeasonReward: new normalizr.Entity(
    'event_season_rewards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  experienceLevel: new normalizr.Entity(
    'experience_levels',
    {},
    {
      idAttribute: 'row',
    },
  ),
  explodingStormBuff: new normalizr.Entity(
    'exploding_storm_buffs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  extraTerrainFeature: new normalizr.Entity(
    'extra_terrain_features',
    {},
    {
      idAttribute: 'row',
    },
  ),
  extraTerrainFeatureFamily: new normalizr.Entity(
    'extra_terrain_feature_families',
    {},
    {
      idAttribute: 'row',
    },
  ),
  flask: new normalizr.Entity(
    'flasks',
    {},
    {
      idAttribute: 'row',
    },
  ),
  flaskType: new normalizr.Entity(
    'flask_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  flavourText: new normalizr.Entity(
    'flavour_texts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  footprint: new normalizr.Entity(
    'footprints',
    {},
    {
      idAttribute: 'row',
    },
  ),
  gameConstant: new normalizr.Entity(
    'game_constants',
    {},
    {
      idAttribute: 'row',
    },
  ),
  gemTag: new normalizr.Entity(
    'gem_tags',
    {},
    {
      idAttribute: 'row',
    },
  ),
  gemType: new normalizr.Entity(
    'gem_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  globalAudioConfig: new normalizr.Entity(
    'global_audio_configs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  globalQuestFlag: new normalizr.Entity(
    'global_quest_flags',
    {},
    {
      idAttribute: 'row',
    },
  ),
  grandmaster: new normalizr.Entity(
    'grandmasters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  grantedEffect: new normalizr.Entity(
    'granted_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  grantedEffectGroup: new normalizr.Entity(
    'granted_effect_groups',
    {},
    {
      idAttribute: 'row',
    },
  ),
  grantedEffectsPerLevel: new normalizr.Entity(
    'granted_effects_per_levels',
    {},
    {
      idAttribute: 'row',
    },
  ),
  hideout: new normalizr.Entity(
    'hideouts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  hideoutDoodad: new normalizr.Entity(
    'hideout_doodads',
    {},
    {
      idAttribute: 'row',
    },
  ),
  hideoutInteractable: new normalizr.Entity(
    'hideout_interactables',
    {},
    {
      idAttribute: 'row',
    },
  ),
  impactSoundDatum: new normalizr.Entity(
    'impact_sound_data',
    {},
    {
      idAttribute: 'row',
    },
  ),
  intMission: new normalizr.Entity(
    'int_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  intMissionMod: new normalizr.Entity(
    'int_mission_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  intMissionMonster: new normalizr.Entity(
    'int_mission_monsters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  invasionMonsterGroup: new normalizr.Entity(
    'invasion_monster_groups',
    {},
    {
      idAttribute: 'row',
    },
  ),
  invasionMonsterRestriction: new normalizr.Entity(
    'invasion_monster_restrictions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  invasionMonsterRole: new normalizr.Entity(
    'invasion_monster_roles',
    {},
    {
      idAttribute: 'row',
    },
  ),
  invasionMonstersPerArea: new normalizr.Entity(
    'invasion_monsters_per_areas',
    {},
    {
      idAttribute: 'row',
    },
  ),
  itemClass: new normalizr.Entity(
    'item_classes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  itemExperiencePerLevel: new normalizr.Entity(
    'item_experience_per_levels',
    {},
    {
      idAttribute: 'row',
    },
  ),
  itemVisualEffect: new normalizr.Entity(
    'item_visual_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  itemVisualIdentity: new normalizr.Entity(
    'item_visual_identities',
    {},
    {
      idAttribute: 'row',
    },
  ),
  itemisedVisualEffect: new normalizr.Entity(
    'itemised_visual_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  killstreakThreshold: new normalizr.Entity(
    'killstreak_thresholds',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthArea: new normalizr.Entity(
    'labyrinth_areas',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthExclusionGroup: new normalizr.Entity(
    'labyrinth_exclusion_groups',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthIzaroChest: new normalizr.Entity(
    'labyrinth_izaro_chests',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthLadderReward: new normalizr.Entity(
    'labyrinth_ladder_rewards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthNodeOverride: new normalizr.Entity(
    'labyrinth_node_overrides',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthReward: new normalizr.Entity(
    'labyrinth_rewards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthSecret: new normalizr.Entity(
    'labyrinth_secrets',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthSecretEffect: new normalizr.Entity(
    'labyrinth_secret_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthSecretLocation: new normalizr.Entity(
    'labyrinth_secret_locations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthSection: new normalizr.Entity(
    'labyrinth_sections',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthSectionLayout: new normalizr.Entity(
    'labyrinth_section_layouts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  labyrinthTrinket: new normalizr.Entity(
    'labyrinth_trinkets',
    {},
    {
      idAttribute: 'row',
    },
  ),
  leagueCategory: new normalizr.Entity(
    'league_categories',
    {},
    {
      idAttribute: 'row',
    },
  ),
  leagueFlag: new normalizr.Entity(
    'league_flags',
    {},
    {
      idAttribute: 'row',
    },
  ),
  leagueQuestFlag: new normalizr.Entity(
    'league_quest_flags',
    {},
    {
      idAttribute: 'row',
    },
  ),
  leagueTrophy: new normalizr.Entity(
    'league_trophies',
    {},
    {
      idAttribute: 'row',
    },
  ),
  map: new normalizr.Entity(
    'maps',
    {},
    {
      idAttribute: 'row',
    },
  ),
  mapConnection: new normalizr.Entity(
    'map_connections',
    {},
    {
      idAttribute: 'row',
    },
  ),
  mapDeviceRecipe: new normalizr.Entity(
    'map_device_recipes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  mapInhabitant: new normalizr.Entity(
    'map_inhabitants',
    {},
    {
      idAttribute: 'row',
    },
  ),
  mapPin: new normalizr.Entity(
    'map_pins',
    {},
    {
      idAttribute: 'row',
    },
  ),
  mapStashTabLayout: new normalizr.Entity(
    'map_stash_tab_layouts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  microtransactionCharacterPortraitVariation: new normalizr.Entity(
    'microtransaction_character_portrait_variations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  microtransactionFireworksVariation: new normalizr.Entity(
    'microtransaction_fireworks_variations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  microtransactionPortalVariation: new normalizr.Entity(
    'microtransaction_portal_variations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  microtransactionSocialFrameVariation: new normalizr.Entity(
    'microtransaction_social_frame_variations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  minimapIcon: new normalizr.Entity(
    'minimap_icons',
    {},
    {
      idAttribute: 'row',
    },
  ),
  miscAnimated: new normalizr.Entity(
    'misc_animateds',
    {},
    {
      idAttribute: 'row',
    },
  ),
  miscBeam: new normalizr.Entity(
    'misc_beams',
    {},
    {
      idAttribute: 'row',
    },
  ),
  miscObject: new normalizr.Entity(
    'misc_objects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  missionTileMap: new normalizr.Entity(
    'mission_tile_maps',
    {},
    {
      idAttribute: 'row',
    },
  ),
  missionTransitionTile: new normalizr.Entity(
    'mission_transition_tiles',
    {},
    {
      idAttribute: 'row',
    },
  ),
  mod: new normalizr.Entity(
    'mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  modAuraFlag: new normalizr.Entity(
    'mod_aura_flags',
    {},
    {
      idAttribute: 'row',
    },
  ),
  modDomain: new normalizr.Entity(
    'mod_domains',
    {},
    {
      idAttribute: 'row',
    },
  ),
  modFamily: new normalizr.Entity(
    'mod_families',
    {},
    {
      idAttribute: 'row',
    },
  ),
  modGenerationType: new normalizr.Entity(
    'mod_generation_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  modSellPrice: new normalizr.Entity(
    'mod_sell_prices',
    {},
    {
      idAttribute: 'row',
    },
  ),
  modSellPriceType: new normalizr.Entity(
    'mod_sell_price_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  modType: new normalizr.Entity(
    'mod_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterAdditionalMonsterDrop: new normalizr.Entity(
    'monster_additional_monster_drops',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterArmour: new normalizr.Entity(
    'monster_armours',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterBehavior: new normalizr.Entity(
    'monster_behaviors',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterFleeCondition: new normalizr.Entity(
    'monster_flee_conditions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterGroupEntry: new normalizr.Entity(
    'monster_group_entries',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterGroupName: new normalizr.Entity(
    'monster_group_names',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterMapBossDifficulty: new normalizr.Entity(
    'monster_map_boss_difficulties',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterMapDifficulty: new normalizr.Entity(
    'monster_map_difficulties',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterPack: new normalizr.Entity(
    'monster_packs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterPackEntry: new normalizr.Entity(
    'monster_pack_entries',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterResistance: new normalizr.Entity(
    'monster_resistances',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterScalingByLevel: new normalizr.Entity(
    'monster_scaling_by_levels',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterSegment: new normalizr.Entity(
    'monster_segments',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterSize: new normalizr.Entity(
    'monster_sizes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterType: new normalizr.Entity(
    'monster_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  monsterVariety: new normalizr.Entity(
    'monster_varieties',
    {},
    {
      idAttribute: 'row',
    },
  ),
  music: new normalizr.Entity(
    'music',
    {},
    {
      idAttribute: 'row',
    },
  ),
  mysteryPack: new normalizr.Entity(
    'mystery_packs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  mysteryPackItem: new normalizr.Entity(
    'mystery_pack_items',
    {},
    {
      idAttribute: 'row',
    },
  ),
  nPC: new normalizr.Entity(
    'n_p_cs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  nPCAudio: new normalizr.Entity(
    'n_p_c_audios',
    {},
    {
      idAttribute: 'row',
    },
  ),
  nPCMaster: new normalizr.Entity(
    'n_p_c_masters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  nPCMasterExperiencePerLevel: new normalizr.Entity(
    'n_p_c_master_experience_per_levels',
    {},
    {
      idAttribute: 'row',
    },
  ),
  nPCShop: new normalizr.Entity(
    'n_p_c_shops',
    {},
    {
      idAttribute: 'row',
    },
  ),
  nPCTalk: new normalizr.Entity(
    'n_p_c_talks',
    {},
    {
      idAttribute: 'row',
    },
  ),
  nPCTalkCategory: new normalizr.Entity(
    'n_p_c_talk_categories',
    {},
    {
      idAttribute: 'row',
    },
  ),
  nPCTextAudio: new normalizr.Entity(
    'n_p_c_text_audios',
    {},
    {
      idAttribute: 'row',
    },
  ),
  normalDifficultyMasterWeight: new normalizr.Entity(
    'normal_difficulty_master_weights',
    {},
    {
      idAttribute: 'row',
    },
  ),
  notification: new normalizr.Entity(
    'notifications',
    {},
    {
      idAttribute: 'row',
    },
  ),
  oldMapStashTabLayout: new normalizr.Entity(
    'old_map_stash_tab_layouts',
    {},
    {
      idAttribute: 'row',
    },
  ),
  orientation: new normalizr.Entity(
    'orientations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  pVPType: new normalizr.Entity(
    'p_v_p_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  passiveJewelSlot: new normalizr.Entity(
    'passive_jewel_slots',
    {},
    {
      idAttribute: 'row',
    },
  ),
  passiveSkill: new normalizr.Entity(
    'passive_skills',
    {},
    {
      idAttribute: 'row',
    },
  ),
  pathOfEndurance: new normalizr.Entity(
    'path_of_endurances',
    {},
    {
      idAttribute: 'row',
    },
  ),
  perLevelValue: new normalizr.Entity(
    'per_level_values',
    {},
    {
      idAttribute: 'row',
    },
  ),
  perandusBoss: new normalizr.Entity(
    'perandus_bosses',
    {},
    {
      idAttribute: 'row',
    },
  ),
  perandusChest: new normalizr.Entity(
    'perandus_chests',
    {},
    {
      idAttribute: 'row',
    },
  ),
  perandusDaemon: new normalizr.Entity(
    'perandus_daemons',
    {},
    {
      idAttribute: 'row',
    },
  ),
  perandusGuard: new normalizr.Entity(
    'perandus_guards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  pet: new normalizr.Entity(
    'pets',
    {},
    {
      idAttribute: 'row',
    },
  ),
  preloadGroup: new normalizr.Entity(
    'preload_groups',
    {},
    {
      idAttribute: 'row',
    },
  ),
  preloadPriority: new normalizr.Entity(
    'preload_priorities',
    {},
    {
      idAttribute: 'row',
    },
  ),
  projectile: new normalizr.Entity(
    'projectiles',
    {},
    {
      idAttribute: 'row',
    },
  ),
  projectileVariation: new normalizr.Entity(
    'projectile_variations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  prophecy: new normalizr.Entity(
    'prophecies',
    {},
    {
      idAttribute: 'row',
    },
  ),
  prophecyChain: new normalizr.Entity(
    'prophecy_chains',
    {},
    {
      idAttribute: 'row',
    },
  ),
  prophecyType: new normalizr.Entity(
    'prophecy_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  quest: new normalizr.Entity(
    'quests',
    {},
    {
      idAttribute: 'row',
    },
  ),
  questAchievement: new normalizr.Entity(
    'quest_achievements',
    {},
    {
      idAttribute: 'row',
    },
  ),
  questFlag: new normalizr.Entity(
    'quest_flags',
    {},
    {
      idAttribute: 'row',
    },
  ),
  questReward: new normalizr.Entity(
    'quest_rewards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  questState: new normalizr.Entity(
    'quest_states',
    {},
    {
      idAttribute: 'row',
    },
  ),
  questStaticReward: new normalizr.Entity(
    'quest_static_rewards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  questVendorReward: new normalizr.Entity(
    'quest_vendor_rewards',
    {},
    {
      idAttribute: 'row',
    },
  ),
  race: new normalizr.Entity(
    'races',
    {},
    {
      idAttribute: 'row',
    },
  ),
  raceArea: new normalizr.Entity(
    'race_areas',
    {},
    {
      idAttribute: 'row',
    },
  ),
  raceTime: new normalizr.Entity(
    'race_times',
    {},
    {
      idAttribute: 'row',
    },
  ),
  randomUniqueMonster: new normalizr.Entity(
    'random_unique_monsters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  rarity: new normalizr.Entity(
    'rarities',
    {},
    {
      idAttribute: 'row',
    },
  ),
  realm: new normalizr.Entity(
    'realms',
    {},
    {
      idAttribute: 'row',
    },
  ),
  relativeImportanceConstant: new normalizr.Entity(
    'relative_importance_constants',
    {},
    {
      idAttribute: 'row',
    },
  ),
  rogueExile: new normalizr.Entity(
    'rogue_exiles',
    {},
    {
      idAttribute: 'row',
    },
  ),
  runicCircle: new normalizr.Entity(
    'runic_circles',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shieldType: new normalizr.Entity(
    'shield_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopCategory: new normalizr.Entity(
    'shop_categories',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopCountry: new normalizr.Entity(
    'shop_countries',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopCurrency: new normalizr.Entity(
    'shop_currencies',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopItem: new normalizr.Entity(
    'shop_items',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopItemPrice: new normalizr.Entity(
    'shop_item_prices',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopPaymentPackage: new normalizr.Entity(
    'shop_payment_packages',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopPaymentPackageItem: new normalizr.Entity(
    'shop_payment_package_items',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopPaymentPackagePrice: new normalizr.Entity(
    'shop_payment_package_prices',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopRegion: new normalizr.Entity(
    'shop_regions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shopToken: new normalizr.Entity(
    'shop_tokens',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shrine: new normalizr.Entity(
    'shrines',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shrineBuff: new normalizr.Entity(
    'shrine_buffs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  shrineSound: new normalizr.Entity(
    'shrine_sounds',
    {},
    {
      idAttribute: 'row',
    },
  ),
  skillGem: new normalizr.Entity(
    'skill_gems',
    {},
    {
      idAttribute: 'row',
    },
  ),
  skillTotem: new normalizr.Entity(
    'skill_totems',
    {},
    {
      idAttribute: 'row',
    },
  ),
  skillTotemVariation: new normalizr.Entity(
    'skill_totem_variations',
    {},
    {
      idAttribute: 'row',
    },
  ),
  soundEffect: new normalizr.Entity(
    'sound_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  stat: new normalizr.Entity(
    'stats',
    {},
    {
      idAttribute: 'row',
    },
  ),
  statDescriptionFunction: new normalizr.Entity(
    'stat_description_functions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  statSemantic: new normalizr.Entity(
    'stat_semantics',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexIntMission: new normalizr.Entity(
    'str_dex_int_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexIntMissionExtraRequirement: new normalizr.Entity(
    'str_dex_int_mission_extra_requirements',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexIntMissionMap: new normalizr.Entity(
    'str_dex_int_mission_maps',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexIntMissionMod: new normalizr.Entity(
    'str_dex_int_mission_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexIntMissionUniqueMap: new normalizr.Entity(
    'str_dex_int_mission_unique_maps',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexMission: new normalizr.Entity(
    'str_dex_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexMissionArchetype: new normalizr.Entity(
    'str_dex_mission_archetypes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexMissionMod: new normalizr.Entity(
    'str_dex_mission_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strDexMissionSpecialMod: new normalizr.Entity(
    'str_dex_mission_special_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strIntMission: new normalizr.Entity(
    'str_int_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strIntMissionMonsterWave: new normalizr.Entity(
    'str_int_mission_monster_waves',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strIntMissionRelicMod: new normalizr.Entity(
    'str_int_mission_relic_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strIntMissionRelicPattern: new normalizr.Entity(
    'str_int_mission_relic_patterns',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strMapMod: new normalizr.Entity(
    'str_map_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strMission: new normalizr.Entity(
    'str_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strMissionBoss: new normalizr.Entity(
    'str_mission_bosses',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strMissionMapModNumber: new normalizr.Entity(
    'str_mission_map_mod_numbers',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strMissionSpiritEffect: new normalizr.Entity(
    'str_mission_spirit_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strMissionSpiritSecondaryEffect: new normalizr.Entity(
    'str_mission_spirit_secondary_effects',
    {},
    {
      idAttribute: 'row',
    },
  ),
  strongbox: new normalizr.Entity(
    'strongboxes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  summonedSpecificBarrel: new normalizr.Entity(
    'summoned_specific_barrels',
    {},
    {
      idAttribute: 'row',
    },
  ),
  summonedSpecificMonster: new normalizr.Entity(
    'summoned_specific_monsters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  summonedSpecificMonstersOnDeath: new normalizr.Entity(
    'summoned_specific_monsters_on_deaths',
    {},
    {
      idAttribute: 'row',
    },
  ),
  supporterPackSet: new normalizr.Entity(
    'supporter_pack_sets',
    {},
    {
      idAttribute: 'row',
    },
  ),
  tag: new normalizr.Entity(
    'tags',
    {},
    {
      idAttribute: 'row',
    },
  ),
  talisman: new normalizr.Entity(
    'talismans',
    {},
    {
      idAttribute: 'row',
    },
  ),
  talismanMonsterMod: new normalizr.Entity(
    'talisman_monster_mods',
    {},
    {
      idAttribute: 'row',
    },
  ),
  talismanPack: new normalizr.Entity(
    'talisman_packs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  terrainPlugin: new normalizr.Entity(
    'terrain_plugins',
    {},
    {
      idAttribute: 'row',
    },
  ),
  tip: new normalizr.Entity(
    'tips',
    {},
    {
      idAttribute: 'row',
    },
  ),
  topology: new normalizr.Entity(
    'topologies',
    {},
    {
      idAttribute: 'row',
    },
  ),
  tormentSpirit: new normalizr.Entity(
    'torment_spirits',
    {},
    {
      idAttribute: 'row',
    },
  ),
  triggerSpawner: new normalizr.Entity(
    'trigger_spawners',
    {},
    {
      idAttribute: 'row',
    },
  ),
  uniqueChest: new normalizr.Entity(
    'unique_chests',
    {},
    {
      idAttribute: 'row',
    },
  ),
  uniqueJewelLimit: new normalizr.Entity(
    'unique_jewel_limits',
    {},
    {
      idAttribute: 'row',
    },
  ),
  uniqueSet: new normalizr.Entity(
    'unique_sets',
    {},
    {
      idAttribute: 'row',
    },
  ),
  uniqueSetName: new normalizr.Entity(
    'unique_set_names',
    {},
    {
      idAttribute: 'row',
    },
  ),
  voteState: new normalizr.Entity(
    'vote_states',
    {},
    {
      idAttribute: 'row',
    },
  ),
  voteType: new normalizr.Entity(
    'vote_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  warbandsGraph: new normalizr.Entity(
    'warbands_graphs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  warbandsMapGraph: new normalizr.Entity(
    'warbands_map_graphs',
    {},
    {
      idAttribute: 'row',
    },
  ),
  warbandsPackMonster: new normalizr.Entity(
    'warbands_pack_monsters',
    {},
    {
      idAttribute: 'row',
    },
  ),
  warbandsPackNumber: new normalizr.Entity(
    'warbands_pack_numbers',
    {},
    {
      idAttribute: 'row',
    },
  ),
  weaponArmourCommon: new normalizr.Entity(
    'weapon_armour_commons',
    {},
    {
      idAttribute: 'row',
    },
  ),
  weaponClass: new normalizr.Entity(
    'weapon_classes',
    {},
    {
      idAttribute: 'row',
    },
  ),
  weaponDamageScaling: new normalizr.Entity(
    'weapon_damage_scalings',
    {},
    {
      idAttribute: 'row',
    },
  ),
  weaponImpactSoundDatum: new normalizr.Entity(
    'weapon_impact_sound_data',
    {},
    {
      idAttribute: 'row',
    },
  ),
  weaponSoundType: new normalizr.Entity(
    'weapon_sound_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  weaponType: new normalizr.Entity(
    'weapon_types',
    {},
    {
      idAttribute: 'row',
    },
  ),
  word: new normalizr.Entity(
    'words',
    {},
    {
      idAttribute: 'row',
    },
  ),
  wordlist: new normalizr.Entity(
    'wordlists',
    {},
    {
      idAttribute: 'row',
    },
  ),
  worldArea: new normalizr.Entity(
    'world_areas',
    {},
    {
      idAttribute: 'row',
    },
  ),
  xPPerLevelForMission: new normalizr.Entity(
    'x_p_per_level_for_missions',
    {},
    {
      idAttribute: 'row',
    },
  ),
};
schema['achievement'].define({
  achievement_sets_display: schema['achievementSetsDisplay'],
});
schema['achievementItem'].define({
  achievement: schema['achievement'],
});
schema['achievementSet'].define({});
schema['achievementSetReward'].define({
  achievement_sets_display: schema['achievementSetsDisplay'],
  base_item_type: schema['baseItemType'],
});
schema['achievementSetsDisplay'].define({});
schema['activeSkill'].define({
  weapon_restriction_item_classes: [schema['itemClass']],
  input_stat: [schema['stat']],
  output_stat: [schema['stat']],
});
schema['activeSkillTargetType'].define({});
schema['activeSkillType'].define({});
schema['armourClass'].define({});
schema['armourSurfaceType'].define({});
schema['armourType'].define({
  base_item_type: schema['baseItemType'],
});
schema['ascendancy'].define({
  character: schema['character'],
});
schema['atlasNode'].define({
  world_area: schema['worldArea'],
  default_item_visual_identity: schema['itemVisualIdentity'],
  shaped_item_visual_identity: schema['itemVisualIdentity'],
  atlas_node: [schema['atlasNode']],
});
schema['atlasQuestItem'].define({
  base_item_type: schema['baseItemType'],
  world_area: schema['worldArea'],
});
schema['attribute'].define({});
schema['backendError'].define({});
schema['baseItemType'].define({
  item_class: schema['itemClass'],
  flavour_text: schema['flavourText'],
  sound_effect: schema['soundEffect'],
  item_visual_identity: schema['itemVisualIdentity'],
  equip_achievement_item: schema['achievementItem'],
  implicit_mods: [schema['mod']],
  normal_purchase_base_item_types: [schema['baseItemType']],
  magic_purchase_base_item_types: [schema['baseItemType']],
  tags: [schema['tag']],
  vendor_recipe_achievement_items: [schema['achievementItem']],
  rare_purchase_base_item_types: [schema['baseItemType']],
  unique_purchase_base_item_types: [schema['baseItemType']],
});
schema['beyondDemon'].define({
  monster_variety: schema['monsterVariety'],
});
schema['bindableVirtualKey'].define({});
schema['bloodType'].define({});
schema['bloodline'].define({
  buff_definition: schema['buffDefinition'],
  monster_variety: schema['monsterVariety'],
  mods: [schema['mod']],
  spawn_weight_tags: [schema['tag']],
  item_weight_tags: [schema['tag']],
});
schema['buffCategory'].define({});
schema['buffDefinition'].define({
  maximum_stat: schema['stat'],
  current_stat: schema['stat'],
  buff_visual: schema['buffVisual'],
  stats: [schema['stat']],
});
schema['buffGroup'].define({});
schema['buffMergeMode'].define({});
schema['buffVisual'].define({
  misc_animated: schema['miscAnimated'],
  misc_animated2: schema['miscAnimated'],
  preload_groups: [schema['preloadGroup']],
});
schema['buffVisualOrbType'].define({});
schema['character'].define({
  start_skill_gem_base_item_type: schema['baseItemType'],
  start_weapon_base_item_type: schema['baseItemType'],
});
schema['characterAudioEvent'].define({
  marauder_character_text_audio: [schema['characterTextAudio']],
  ranger_character_text_audio: [schema['characterTextAudio']],
  witch_character_text_audio: [schema['characterTextAudio']],
  duelist_character_text_audio: [schema['characterTextAudio']],
  shadow_character_text_audio: [schema['characterTextAudio']],
  templar_character_text_audio: [schema['characterTextAudio']],
  scion_character_text_audio: [schema['characterTextAudio']],
  goddess_character_text_audio: [schema['characterTextAudio']],
  jack_the_axe_character_text_audio: [schema['characterTextAudio']],
});
schema['characterPanelDescriptionMode'].define({});
schema['characterPanelStat'].define({
  character_panel_description_mode: schema['characterPanelDescriptionMode'],
  character_panel_tab: schema['characterPanelTab'],
  stats1: [schema['stat']],
  stats2: [schema['stat']],
  stats3: [schema['stat']],
});
schema['characterPanelStatContext'].define({});
schema['characterPanelTab'].define({});
schema['characterStartItem'].define({
  character_start_state: schema['characterStartState'],
  base_item_type: schema['baseItemType'],
  socketed_skill_gems: [schema['skillGem']],
  mods: [schema['mod']],
});
schema['characterStartQuestState'].define({
  quest: [schema['quest']],
  map_pins: [schema['mapPin']],
});
schema['characterStartState'].define({
  character: schema['character'],
  character_start_state_set: schema['characterStartStateSet'],
  passive_skills: [schema['passiveSkill']],
  normal_character_start_quest_state: [schema['characterStartQuestState']],
  cruel_character_start_quest_state: [schema['characterStartQuestState']],
  merciless_character_start_quest_state: [schema['characterStartQuestState']],
});
schema['characterStartStateSet'].define({});
schema['characterTextAudio'].define({});
schema['chest'].define({
  base_item_type: schema['baseItemType'],
  chest_effect: schema['chestEffect'],
  corrupt_achievement_item: schema['achievementItem'],
  currency_use_achievement_item: schema['achievementItem'],
  encounter_achievement_item: schema['achievementItem'],
  mods: [schema['mod']],
  tags: [schema['tag']],
});
schema['chestCluster'].define({
  chests: [schema['chest']],
});
schema['chestEffect'].define({});
schema['clientString'].define({});
schema['cloneShotVariation'].define({
  monster_variety: schema['monsterVariety'],
});
schema['command'].define({});
schema['componentArmour'].define({
  base_item_type: schema['baseItemType'],
});
schema['componentAttributeRequirement'].define({
  base_item_type: schema['baseItemType'],
});
schema['componentCharge'].define({
  base_item_type: schema['baseItemType'],
});
schema['cooldownBypassType'].define({});
schema['cooldownGroup'].define({});
schema['craftingBenchCustomAction'].define({});
schema['craftingBenchOption'].define({
  npc_master: schema['nPCMaster'],
  mod: schema['mod'],
  cost_base_item_types: [schema['baseItemType']],
  item_classes: [schema['itemClass']],
});
schema['currencyItem'].define({
  base_item_type: schema['baseItemType'],
  full_stack_base_item_type: schema['baseItemType'],
  possession_achievement_item: schema['achievementItem'],
  usage_achievement_items: [schema['achievementItem']],
});
schema['currencyStashTabLayout'].define({
  base_item_type: schema['baseItemType'],
});
schema['currencyUseType'].define({});
schema['dailyMission'].define({
  npc_talk: schema['nPCTalk'],
  pvp_type: schema['pVPType'],
  characters: [schema['character']],
});
schema['dailyOverride'].define({
  daily_missionss: schema['dailyMission'],
});
schema['damageParticleEffect'].define({});
schema['dance'].define({
  base_item_type: schema['baseItemType'],
  character: schema['character'],
});
schema['daressoPitFight'].define({});
schema['default'].define({});
schema['defaultMonsterStat'].define({
  difficulty: schema['difficulty'],
});
schema['descentExile'].define({
  world_area: schema['worldArea'],
  character: schema['character'],
  monster_variety: schema['monsterVariety'],
});
schema['descentRewardChest'].define({
  world_area: schema['worldArea'],
  base_item_types1: [schema['baseItemType']],
  base_item_types2: [schema['baseItemType']],
  base_item_types3: [schema['baseItemType']],
  base_item_types4: [schema['baseItemType']],
  base_item_types5: [schema['baseItemType']],
  base_item_types6: [schema['baseItemType']],
  base_item_types7: [schema['baseItemType']],
  base_item_types8: [schema['baseItemType']],
  base_item_types9: [schema['baseItemType']],
  base_item_types10: [schema['baseItemType']],
  base_item_types11: [schema['baseItemType']],
  base_item_types12: [schema['baseItemType']],
  base_item_types13: [schema['baseItemType']],
  base_item_types14: [schema['baseItemType']],
});
schema['descentStarterChest'].define({
  character: schema['character'],
  base_item_type: schema['baseItemType'],
  world_area: schema['worldArea'],
});
schema['dexIntMission'].define({
  hostage_monster_variety: schema['monsterVariety'],
  npc_talk: schema['nPCTalk'],
  achievement_items: [schema['achievementItem']],
});
schema['dexIntMissionGuard'].define({
  monster_pack: schema['monsterPack'],
});
schema['dexIntMissionGuardMod'].define({});
schema['dexIntMissionTarget'].define({
  monster_variety: schema['monsterVariety'],
});
schema['dexMission'].define({});
schema['dexMissionMod'].define({
  mod: schema['mod'],
});
schema['dexMissionMonster'].define({
  boss_monster_variety: schema['monsterVariety'],
  monster_packs: [schema['monsterPack']],
  monster_varieties: [schema['monsterVariety']],
});
schema['dexMissionTracking'].define({
  npc_talk: schema['nPCTalk'],
});
schema['difficulty'].define({});
schema['displayMinionMonsterType'].define({
  monster_variety: schema['monsterVariety'],
});
schema['divinationCardArt'].define({
  base_item_type: schema['baseItemType'],
});
schema['divinationCardStashTabLayout'].define({
  base_item_type: schema['baseItemType'],
});
schema['dropPool'].define({});
schema['eclipseMod'].define({
  mod: schema['mod'],
  spawn_weight_tags: [schema['tag']],
});
schema['effectiveness'].define({});
schema['effectivenessCostConstant'].define({});
schema['endlessLedgeChest'].define({
  world_area: schema['worldArea'],
  base_item_types: [schema['baseItemType']],
});
schema['environment'].define({});
schema['essence'].define({
  base_item_type: schema['baseItemType'],
  mods1: schema['mod'],
  mods2: schema['mod'],
  quiver_mod: schema['mod'],
  amulet1_mod: schema['mod'],
  belt1_mod: schema['mod'],
  belt3_mod: schema['mod'],
  gloves1_mod: schema['mod'],
  boots1_mod: schema['mod'],
  body_armour1_mod: schema['mod'],
  helmet1_mod: schema['mod'],
  shield1_mod: schema['mod'],
  essence_type: schema['essenceType'],
  '1_hand_mods1': schema['mod'],
  mods13: schema['mod'],
  mods14: schema['mod'],
  mods15: schema['mod'],
  '2_hand_mods1': schema['mod'],
  boots3_mod: schema['mod'],
  ranged_mod: schema['mod'],
  helmet2_mod: schema['mod'],
  body_armour2_mod: schema['mod'],
  boots2_mod: schema['mod'],
  gloves2_mod: schema['mod'],
  bow_mod: schema['mod'],
  wand_mod: schema['mod'],
  '2_hand_mods2': schema['mod'],
  '2_hand_mods3': schema['mod'],
  '2_hand_mods4': schema['mod'],
  '2_hand_mods5': schema['mod'],
  '1_hand_mods2': schema['mod'],
  '1_hand_mods3': schema['mod'],
  '1_hand_mods4': schema['mod'],
  '1_hand_mods5': schema['mod'],
  '1_hand_mods6': schema['mod'],
  '1_hand_mods7': schema['mod'],
  '1_hand_mods8': schema['mod'],
  '1_hand_mods9': schema['mod'],
  belt2_mod: schema['mod'],
  amulet2_mod: schema['mod'],
  ring_mod: schema['mod'],
  mods41: schema['mod'],
  shield2_mod: schema['mod'],
  mods43: schema['mod'],
  monster_mods: [schema['mod']],
});
schema['essenceStashTabLayout'].define({
  base_item_type: schema['baseItemType'],
});
schema['essenceType'].define({
  word: schema['word'],
});
schema['eventSeason'].define({});
schema['eventSeasonReward'].define({
  event_season: schema['eventSeason'],
});
schema['experienceLevel'].define({});
schema['explodingStormBuff'].define({
  buff_definitions1: schema['buffDefinition'],
  friendly_monster_variety: schema['monsterVariety'],
  misc_object: schema['miscObject'],
  misc_animated: schema['miscAnimated'],
  buff_visual: schema['buffVisual'],
  enemy_monster_variety: schema['monsterVariety'],
  buff_definitions2: schema['buffDefinition'],
});
schema['extraTerrainFeature'].define({});
schema['extraTerrainFeatureFamily'].define({});
schema['flask'].define({
  base_item_type: schema['baseItemType'],
  buff_definition: schema['buffDefinition'],
});
schema['flaskType'].define({});
schema['flavourText'].define({});
schema['footprint'].define({});
schema['gameConstant'].define({});
schema['gemTag'].define({});
schema['gemType'].define({});
schema['globalAudioConfig'].define({});
schema['globalQuestFlag'].define({});
schema['grandmaster'].define({
  mods: [schema['mod']],
});
schema['grantedEffect'].define({
  active_skill: schema['activeSkill'],
});
schema['grantedEffectGroup'].define({});
schema['grantedEffectsPerLevel'].define({
  granted_effect: schema['grantedEffect'],
  stats: [schema['stat']],
  quality_stats: [schema['stat']],
  stats2: [schema['stat']],
});
schema['hideout'].define({
  small_world_area: schema['worldArea'],
  npc_master: schema['nPCMaster'],
  medium_world_area: schema['worldArea'],
  large_world_area: schema['worldArea'],
});
schema['hideoutDoodad'].define({
  base_item_type: schema['baseItemType'],
  npc_master: schema['nPCMaster'],
});
schema['hideoutInteractable'].define({
  base_item_type: schema['baseItemType'],
});
schema['impactSoundDatum'].define({});
schema['intMission'].define({
  npc_talk: schema['nPCTalk'],
  monster_variety: schema['monsterVariety'],
});
schema['intMissionMod'].define({
  monster_variety: schema['monsterVariety'],
  mods: [schema['mod']],
});
schema['intMissionMonster'].define({
  objective_monster_varieties: [schema['monsterVariety']],
  achievement_items: [schema['achievementItem']],
});
schema['invasionMonsterGroup'].define({});
schema['invasionMonsterRestriction'].define({
  world_area: schema['worldArea'],
  monster_varieties: [schema['monsterVariety']],
});
schema['invasionMonsterRole'].define({});
schema['invasionMonstersPerArea'].define({
  world_area: schema['worldArea'],
  monster_varieties1: [schema['monsterVariety']],
  monster_varieties2: [schema['monsterVariety']],
});
schema['itemClass'].define({});
schema['itemExperiencePerLevel'].define({
  base_item_type: schema['baseItemType'],
});
schema['itemVisualEffect'].define({});
schema['itemVisualIdentity'].define({
  sound_effect: schema['soundEffect'],
  create_corrupted_jewel_achievement_item: schema['achievementItem'],
  pickup_achievement_items: [schema['achievementItem']],
  identify_achievement_items: [schema['achievementItem']],
  corrupt_achievement_items: [schema['achievementItem']],
});
schema['itemisedVisualEffect'].define({
  base_item_type: schema['baseItemType'],
  item_visual_effect: schema['itemVisualEffect'],
  item_visual_identity1: schema['itemVisualIdentity'],
  item_visual_identity2: schema['itemVisualIdentity'],
});
schema['killstreakThreshold'].define({
  monster_variety: schema['monsterVariety'],
  achievement_item: schema['achievementItem'],
});
schema['labyrinthArea'].define({
  normal_world_areas: [schema['worldArea']],
  cruel_world_areas: [schema['worldArea']],
  merciless_world_areas: [schema['worldArea']],
  endgame_world_areas: [schema['worldArea']],
});
schema['labyrinthExclusionGroup'].define({});
schema['labyrinthIzaroChest'].define({
  chest: schema['chest'],
});
schema['labyrinthLadderReward'].define({});
schema['labyrinthNodeOverride'].define({});
schema['labyrinthReward'].define({});
schema['labyrinthSecret'].define({
  achievement_item: schema['achievementItem'],
  labyrinth_secret_effects0: [schema['labyrinthSecretEffect']],
  labyrinth_secret_effects1: [schema['labyrinthSecretEffect']],
  labyrinth_secret_effects2: [schema['labyrinthSecretEffect']],
  labyrinth_secret_effects3: [schema['labyrinthSecretEffect']],
});
schema['labyrinthSecretEffect'].define({
  monster_variety: schema['monsterVariety'],
  buff_buff_definition: schema['buffDefinition'],
});
schema['labyrinthSecretLocation'].define({});
schema['labyrinthSection'].define({});
schema['labyrinthSectionLayout'].define({
  labyrinth_section: schema['labyrinthSection'],
  labyrinth_secrets0: schema['labyrinthSecret'],
  labyrinth_secrets1: schema['labyrinthSecret'],
  labyrinth_area: schema['labyrinthArea'],
  labyrinth_node_override: schema['labyrinthNodeOverride'],
  labyrinth_section_layout: [schema['labyrinthSectionLayout']],
});
schema['labyrinthTrinket'].define({
  base_item_type: schema['baseItemType'],
  labyrinth_secret: schema['labyrinthSecret'],
  buff_buff_definition: schema['buffDefinition'],
});
schema['leagueCategory'].define({});
schema['leagueFlag'].define({});
schema['leagueQuestFlag'].define({});
schema['leagueTrophy'].define({});
schema['map'].define({
  base_item_type: schema['baseItemType'],
  regular_world_area: schema['worldArea'],
  unique_world_area: schema['worldArea'],
  map_upgrade_base_item_type: schema['baseItemType'],
  shaped_base_map: schema['map'],
  maps1: schema['map'],
  maps2: schema['map'],
  maps3: schema['map'],
  monster_packs: [schema['monsterPack']],
  higher_tier_maps_base_item_types: [schema['baseItemType']],
});
schema['mapConnection'].define({
  map_pins0: schema['mapPin'],
  map_pins1: schema['mapPin'],
});
schema['mapDeviceRecipe'].define({
  base_item_types: [schema['baseItemType']],
  world_areas: [schema['worldArea']],
});
schema['mapInhabitant'].define({
  stat: schema['stat'],
});
schema['mapPin'].define({
  normal_waypoint_world_area: schema['worldArea'],
  cruel_waypoint_world_area: schema['worldArea'],
  merciless_waypoint_world_area: schema['worldArea'],
  normal_world_areas: [schema['worldArea']],
  merciless_world_areas: [schema['worldArea']],
  cruel_world_areas: [schema['worldArea']],
  world_areas: [schema['worldArea']],
});
schema['mapStashTabLayout'].define({});
schema['microtransactionCharacterPortraitVariation'].define({});
schema['microtransactionFireworksVariation'].define({
  base_item_type: schema['baseItemType'],
});
schema['microtransactionPortalVariation'].define({
  base_item_type: schema['baseItemType'],
});
schema['microtransactionSocialFrameVariation'].define({
  base_item_type: schema['baseItemType'],
});
schema['minimapIcon'].define({});
schema['miscAnimated'].define({
  preload_groups: [schema['preloadGroup']],
});
schema['miscBeam'].define({
  preload_groups: [schema['preloadGroup']],
});
schema['miscObject'].define({
  preload_groups: [schema['preloadGroup']],
});
schema['missionTileMap'].define({
  npc_master: schema['nPCMaster'],
  world_areas: [schema['worldArea']],
});
schema['missionTransitionTile'].define({});
schema['mod'].define({
  mod_type: schema['modType'],
  stats1: schema['stat'],
  stats2: schema['stat'],
  stats3: schema['stat'],
  stats4: schema['stat'],
  buff_definition: schema['buffDefinition'],
  granted_effects_per_level: schema['grantedEffectsPerLevel'],
  stats5: schema['stat'],
  achievement_item: schema['achievementItem'],
  spawn_weight_tags: [schema['tag']],
  tags: [schema['tag']],
  generation_weight_tags: [schema['tag']],
});
schema['modAuraFlag'].define({});
schema['modDomain'].define({});
schema['modFamily'].define({});
schema['modGenerationType'].define({});
schema['modSellPrice'].define({
  mod_sell_price_type: schema['modSellPriceType'],
  base_item_types: [schema['baseItemType']],
});
schema['modSellPriceType'].define({});
schema['modType'].define({
  mod_sell_prices: [schema['modSellPrice']],
});
schema['monsterAdditionalMonsterDrop'].define({
  monster_variety: schema['monsterVariety'],
});
schema['monsterArmour'].define({});
schema['monsterBehavior'].define({});
schema['monsterFleeCondition'].define({});
schema['monsterGroupEntry'].define({
  monster_variety: schema['monsterVariety'],
});
schema['monsterGroupName'].define({});
schema['monsterMapBossDifficulty'].define({
  stats1: schema['stat'],
  stats2: schema['stat'],
  stats3: schema['stat'],
  stats4: schema['stat'],
});
schema['monsterMapDifficulty'].define({
  stats1: schema['stat'],
  stats2: schema['stat'],
  stats3: schema['stat'],
  stats4: schema['stat'],
});
schema['monsterPack'].define({
  world_areas: [schema['worldArea']],
  boss_monster_monster_varieties: [schema['monsterVariety']],
  tags: [schema['tag']],
});
schema['monsterPackEntry'].define({
  monster_pack: schema['monsterPack'],
  monster_variety: schema['monsterVariety'],
});
schema['monsterResistance'].define({});
schema['monsterScalingByLevel'].define({});
schema['monsterSegment'].define({});
schema['monsterSize'].define({});
schema['monsterType'].define({
  monster_resistance: schema['monsterResistance'],
  tags: [schema['tag']],
});
schema['monsterVariety'].define({
  monster_type: schema['monsterType'],
  back_item_visual_identity: schema['itemVisualIdentity'],
  main_hand_item_class: schema['itemClass'],
  off_hand_item_class: schema['itemClass'],
  helmet_item_visual_identity: schema['itemVisualIdentity'],
  flashback_achievement_item: schema['achievementItem'],
  monster_segment: schema['monsterSegment'],
  monster_armour: schema['monsterArmour'],
  achievement_item: schema['achievementItem'],
  achievement_items4: schema['achievementItem'],
  mods: [schema['mod']],
  tags: [schema['tag']],
  granted_effects: [schema['grantedEffect']],
  mods2: [schema['mod']],
  weapon1_item_visual_identity: [schema['itemVisualIdentity']],
  weapon2_item_visual_identity: [schema['itemVisualIdentity']],
  achievement_items: [schema['achievementItem']],
  special_mods: [schema['mod']],
  achievement_items2: [schema['achievementItem']],
  normal_achievement_items: [schema['achievementItem']],
  merciless_achievement_items: [schema['achievementItem']],
  cruel_achievement_items: [schema['achievementItem']],
  normal_mods: [schema['mod']],
  cruel_mods: [schema['mod']],
  merciless_mods: [schema['mod']],
  kill_rare_in_normal_achievement_items: [schema['achievementItem']],
  kill_rare_in_cruel_achievement_items: [schema['achievementItem']],
  kill_rare_in_merciless_achievement_items: [schema['achievementItem']],
  count_kills_achievement_items: [schema['achievementItem']],
});
schema['music'].define({});
schema['mysteryPack'].define({});
schema['mysteryPackItem'].define({});
schema['nPC'].define({
  npc_master: schema['nPCMaster'],
  npc_shop: schema['nPCShop'],
  npc_audio1: schema['nPCAudio'],
  npc_audio2: schema['nPCAudio'],
});
schema['nPCAudio'].define({});
schema['nPCMaster'].define({
  npc: schema['nPC'],
  signature_mod_mod: schema['mod'],
  achievement_item: schema['achievementItem'],
  talisman_achievement_item: schema['achievementItem'],
  signature_mod_spawn_weight_tags: [schema['tag']],
  unknown_weight_tags: [schema['tag']],
  master_level5_achievement_items: [schema['achievementItem']],
});
schema['nPCMasterExperiencePerLevel'].define({
  npc_master: schema['nPCMaster'],
});
schema['nPCShop'].define({
  sold_item_tags: [schema['tag']],
});
schema['nPCTalk'].define({
  npc: schema['nPC'],
  quest: schema['quest'],
  npc_text_audio: [schema['nPCTextAudio']],
});
schema['nPCTalkCategory'].define({});
schema['nPCTextAudio'].define({
  character: schema['character'],
});
schema['normalDifficultyMasterWeight'].define({});
schema['notification'].define({});
schema['oldMapStashTabLayout'].define({});
schema['orientation'].define({});
schema['pVPType'].define({});
schema['passiveJewelSlot'].define({
  passive_skill: schema['passiveSkill'],
});
schema['passiveSkill'].define({
  achievement_item: schema['achievementItem'],
  granted_buff_buff_definition: schema['buffDefinition'],
  ascendancy: schema['ascendancy'],
  stats: [schema['stat']],
  characters: [schema['character']],
  reminder_client_strings: [schema['clientString']],
});
schema['pathOfEndurance'].define({
  mods: [schema['mod']],
});
schema['perLevelValue'].define({});
schema['perandusBoss'].define({
  monster_variety: schema['monsterVariety'],
});
schema['perandusChest'].define({
  chest: schema['chest'],
});
schema['perandusDaemon'].define({
  monster_variety: schema['monsterVariety'],
});
schema['perandusGuard'].define({
  monster_packs: [schema['monsterPack']],
});
schema['pet'].define({
  base_item_type: schema['baseItemType'],
});
schema['preloadGroup'].define({});
schema['preloadPriority'].define({});
schema['projectile'].define({});
schema['projectileVariation'].define({
  projectile: schema['projectile'],
});
schema['prophecy'].define({
  prophecy_chain: schema['prophecyChain'],
  quest_tracker_client_strings: [schema['clientString']],
});
schema['prophecyChain'].define({});
schema['prophecyType'].define({});
schema['quest'].define({});
schema['questAchievement'].define({
  achievement_item: schema['achievementItem'],
  difficulty: schema['difficulty'],
});
schema['questFlag'].define({});
schema['questReward'].define({
  quest: schema['quest'],
  character: schema['character'],
  base_item_type: schema['baseItemType'],
});
schema['questState'].define({
  quest: schema['quest'],
  map_pins1: [schema['mapPin']],
  map_pins2: [schema['mapPin']],
});
schema['questStaticReward'].define({
  stat: schema['baseItemType'],
  difficulty: schema['difficulty'],
  quest: schema['quest'],
});
schema['questVendorReward'].define({
  npc: schema['nPC'],
  characters: [schema['character']],
  base_item_types: [schema['baseItemType']],
});
schema['race'].define({});
schema['raceArea'].define({
  race: schema['race'],
  world_area: schema['worldArea'],
  mods: [schema['mod']],
});
schema['raceTime'].define({
  race: schema['race'],
});
schema['randomUniqueMonster'].define({});
schema['rarity'].define({});
schema['realm'].define({});
schema['relativeImportanceConstant'].define({});
schema['rogueExile'].define({
  monster_variety: schema['monsterVariety'],
});
schema['runicCircle'].define({});
schema['shieldType'].define({
  base_item_type: schema['baseItemType'],
});
schema['shopCategory'].define({});
schema['shopCountry'].define({
  shop_currency: schema['shopCurrency'],
});
schema['shopCurrency'].define({});
schema['shopItem'].define({
  package_shop_item: [schema['shopItem']],
  shop_category: [schema['shopCategory']],
});
schema['shopItemPrice'].define({
  shop_item: schema['shopItem'],
  shop_region: schema['shopRegion'],
});
schema['shopPaymentPackage'].define({
  upgrade_shop_payment_package: schema['shopPaymentPackage'],
});
schema['shopPaymentPackageItem'].define({
  shop_payment_package: schema['shopPaymentPackage'],
  shop_item: schema['shopItem'],
  shop_token: schema['shopToken'],
});
schema['shopPaymentPackagePrice'].define({
  shop_payment_package: schema['shopPaymentPackage'],
  shop_country: schema['shopCountry'],
});
schema['shopRegion'].define({});
schema['shopToken'].define({});
schema['shrine'].define({
  player_shrine_buff: schema['shrineBuff'],
  monster_shrine_buff: schema['shrineBuff'],
  summon_monster_monster_variety: schema['monsterVariety'],
  summon_player_monster_variety: schema['monsterVariety'],
  shrine_sound: schema['shrineSound'],
  achievement_items: [schema['achievementItem']],
});
schema['shrineBuff'].define({
  buff_definition: schema['buffDefinition'],
});
schema['shrineSound'].define({});
schema['skillGem'].define({
  base_item_type: schema['baseItemType'],
  granted_effect: schema['grantedEffect'],
  vaal_variant_base_item_type: schema['baseItemType'],
  gem_tags: [schema['gemTag']],
});
schema['skillTotem'].define({});
schema['skillTotemVariation'].define({
  skill_totem: schema['skillTotem'],
  monster_variety: schema['monsterVariety'],
});
schema['soundEffect'].define({});
schema['stat'].define({
  main_hand_alias_stat: schema['stat'],
  off_hand_alias_stat: schema['stat'],
});
schema['statDescriptionFunction'].define({});
schema['statSemantic'].define({});
schema['strDexIntMission'].define({
  npc_talk: schema['nPCTalk'],
  monster_pack: schema['monsterPack'],
  extra_mods: [schema['mod']],
  achievement_items: [schema['achievementItem']],
});
schema['strDexIntMissionExtraRequirement'].define({
  npc_talk: schema['nPCTalk'],
});
schema['strDexIntMissionMap'].define({
  world_area: schema['worldArea'],
  map_boss_monster_varieties: [schema['monsterVariety']],
});
schema['strDexIntMissionMod'].define({
  mods: [schema['mod']],
});
schema['strDexIntMissionUniqueMap'].define({
  world_area: schema['worldArea'],
  mods: [schema['mod']],
  map_boss_monster_varieties: [schema['monsterVariety']],
});
schema['strDexMission'].define({
  dummy_monster_variety: schema['monsterVariety'],
  npc_talk: schema['nPCTalk'],
  allies_monster_varieties: [schema['monsterVariety']],
  mods: [schema['mod']],
  traps_monster_varieties: [schema['monsterVariety']],
});
schema['strDexMissionArchetype'].define({
  monster_variety: schema['monsterVariety'],
});
schema['strDexMissionMod'].define({
  mods: [schema['mod']],
});
schema['strDexMissionSpecialMod'].define({
  mods: [schema['mod']],
});
schema['strIntMission'].define({
  relic_monster_variety: schema['monsterVariety'],
  npc_talk: schema['nPCTalk'],
  relic_mods: [schema['mod']],
  achievement_items: [schema['achievementItem']],
});
schema['strIntMissionMonsterWave'].define({
  monster_pack: schema['monsterPack'],
  unique_monster_varieties: [schema['monsterVariety']],
});
schema['strIntMissionRelicMod'].define({
  mods: [schema['mod']],
});
schema['strIntMissionRelicPattern'].define({
  relic_mods: [schema['mod']],
});
schema['strMapMod'].define({
  mod: schema['mod'],
});
schema['strMission'].define({
  npc_talk: schema['nPCTalk'],
  mods: [schema['mod']],
});
schema['strMissionBoss'].define({
  monster_variety: schema['monsterVariety'],
});
schema['strMissionMapModNumber'].define({});
schema['strMissionSpiritEffect'].define({
  summon_monster_varietiess: schema['monsterVariety'],
  ground_effect_monster_varietiess: schema['monsterVariety'],
});
schema['strMissionSpiritSecondaryEffect'].define({
  monster_variety: schema['monsterVariety'],
});
schema['strongbox'].define({
  chest: schema['chest'],
});
schema['summonedSpecificBarrel'].define({
  chest: schema['chest'],
});
schema['summonedSpecificMonster'].define({
  monster_variety: schema['monsterVariety'],
});
schema['summonedSpecificMonstersOnDeath'].define({
  monster_variety: schema['monsterVariety'],
});
schema['supporterPackSet'].define({});
schema['tag'].define({});
schema['talisman'].define({
  base_item_type: schema['baseItemType'],
  mod: schema['mod'],
});
schema['talismanMonsterMod'].define({});
schema['talismanPack'].define({
  monster_variety: schema['monsterVariety'],
  monster_pack: schema['monsterPack'],
  monster_packs: [schema['monsterPack']],
});
schema['terrainPlugin'].define({});
schema['tip'].define({});
schema['topology'].define({
  environment: schema['environment'],
});
schema['tormentSpirit'].define({
  monster_variety: schema['monsterVariety'],
  summoned_monster_monster_variety: schema['monsterVariety'],
  spirit_mods: [schema['mod']],
  touched_mods: [schema['mod']],
  possessed_mods: [schema['mod']],
  mods0: [schema['mod']],
  mods1: [schema['mod']],
});
schema['triggerSpawner'].define({});
schema['uniqueChest'].define({
  chest: schema['chest'],
  word: schema['word'],
  mods: [schema['mod']],
});
schema['uniqueJewelLimit'].define({});
schema['uniqueSet'].define({
  word: schema['word'],
});
schema['uniqueSetName'].define({});
schema['voteState'].define({});
schema['voteType'].define({});
schema['warbandsGraph'].define({
  world_area: schema['worldArea'],
});
schema['warbandsMapGraph'].define({
  world_area: schema['worldArea'],
});
schema['warbandsPackMonster'].define({
  tier4_monster_varieties: [schema['monsterVariety']],
  tier3_monster_varieties: [schema['monsterVariety']],
  tier2_monster_varieties: [schema['monsterVariety']],
  tier1_monster_varieties: [schema['monsterVariety']],
});
schema['warbandsPackNumber'].define({});
schema['weaponArmourCommon'].define({});
schema['weaponClass'].define({});
schema['weaponDamageScaling'].define({});
schema['weaponImpactSoundDatum'].define({});
schema['weaponSoundType'].define({});
schema['weaponType'].define({
  base_item_type: schema['baseItemType'],
});
schema['word'].define({
  spawn_weight_tags: [schema['tag']],
});
schema['wordlist'].define({});
schema['worldArea'].define({
  parent_town_world_area: schema['worldArea'],
  difficulty: schema['difficulty'],
  achievement_item: schema['achievementItem'],
  twinned_full_clear_achievement_item: schema['achievementItem'],
  enter_achievement_item: schema['achievementItem'],
  '8_mods_full_clear_achievement_item': schema['achievementItem'],
  '1': [schema['achievementItem']],
  connections_world_areas: [schema['worldArea']],
  topologies: [schema['topology']],
  bosses_monster_varieties: [schema['monsterVariety']],
  monsters_monster_varieties: [schema['monsterVariety']],
  spawn_weight_tags: [schema['tag']],
  full_clear_achievement_items: [schema['achievementItem']],
  mods: [schema['mod']],
  vaal_area_world_areas: [schema['worldArea']],
  area_type_tags: [schema['tag']],
  tags: [schema['tag']],
});
schema['xPPerLevelForMission'].define({});
