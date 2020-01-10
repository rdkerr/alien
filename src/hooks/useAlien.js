const alienMachine = Machine({
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
    creating: {
      on: {
        END_CREATE: "sync"
      }
    },
    reading: {
      on: {
        END_READ: "sync"
      }
    },
    updating: {
      on: {
        END_UPDATE: "sync"
      }
    },
    deleting: {
      on: {
        END_DELETE: "sync"
      }
    }
  }
});
