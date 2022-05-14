:- use_module(library(http/json)).

exec :-
    consult("tempfb.pl"),
    json_write(user_output,"swipl jsonized",[width(128)]).


