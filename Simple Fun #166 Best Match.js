function bestMatch(a, z) {
  var goalDif = Infinity;
  var goalsScored = -1;
  var bestIndex = -1;
  for (i = 0; i < a.length; i++) {
    if (a[i] - z[i] < goalDif || a[i] - z[i] == goalDif && z[i] > goalsScored) {
      goalDif = a[i] - z[i];
      goalsScored = z[i]
      bestIndex = i;
    }
  }
  return bestIndex;
}