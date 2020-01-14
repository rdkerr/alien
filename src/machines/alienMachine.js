import { Machine } from "xstate";

const requestStates = {
  states: {
    loading: {
      on: {
        RESOLVE: "sync",
        REJECT: "failure"
      }
    },
    failure: {}
  }
};

export const alienMachine = Machine({
  id: "alien",
  initial: "init",
  states: {
    init: {
      on: {
        BEGIN_READ: "reading"
      }
    },
    sync: {
      on: {
        BEGIN_CREATE: "creating",
        BEGIN_READ: "reading",
        BEGIN_UPDATE: "updating",
        BEGIN_DELETE: "deleting"
      }
    },
    out_of_sync: {
      on: {

      }
    },
    creating: {
      on: {
        END_CREATE: "sync"
      },
      ...requestStates
    },
    reading: {
      on: {
        END_READ: "sync"
      },
      ...requestStates
    },
    updating: {
      on: {
        END_UPDATE: "sync"
      },
      ...requestStates
    },
    deleting: {
      on: {
        END_DELETE: "sync"
      },
      ...requestStates
    }
  }
});
