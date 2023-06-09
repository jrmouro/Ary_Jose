export const Protocol = {

    wait_to_start_match: "0",
    match_start: "1",
    match_end: "2",
    state_match: "3",
    player_registry_at_match: "4",
    player_unregistry_at_match: "5",
    match_failure: "6",
    abort_match: "7",
    match_prepare: "8",
    match_wait_to_registry: "9",

    match_shot_response: "28",
    match_shot_pass: "29",
    match_shooting: "30",
    match_wait_to_shooting: "31",
    match_wait_to_round_resume: "32",
    match_info: "36",
    match_state: "37",
    match_response: "38",
    match_pass:"39",

    round_wait: "10",
    round_start: "11",
    round_end: "12",
    round_resume: "17",
    round_state: "13",
    round_response: "14",
    round_pass: "15",
    round_wait_response: "16",

    player_wait: "20",
    player_start: "21",
    player_end: "22",
    player_state: "23",
    player_shot_response: "24",
    player_shot_pass: "25",

    wss_client_register:"99"

} as const;